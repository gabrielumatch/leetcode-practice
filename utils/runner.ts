import { benchmark, measureTime } from './performance';
import { generateReadme } from './markdown';
import { updateProgress, updateCategoryProgress } from './update-progress';
import { Glob, write } from 'bun';
import path from 'path';

export async function runBenchmark(directory: string) {
    // Get problem name from folder name
    const problemName = path.basename(directory).split('-').map(w =>
        w.charAt(0).toUpperCase() + w.slice(1)
    ).join(' ');

    // Auto-discover all solution files
    const glob = new Glob('solution-*.ts');
    const solutionFiles = Array.from(glob.scanSync(directory)).sort();

    // Import test cases
    let testCases;
    try {
        const module = await import(path.join(directory, 'test-cases.ts'));
        testCases = module.testCases;
    } catch {
        console.error('❌ Error: test-cases.ts not found in this directory');
        console.error('💡 Create test-cases.ts with: export const testCases = [...]');
        process.exit(1);
    }

    // Dynamically import all solutions
    const solutions = await Promise.all(
        solutionFiles.map(async (file) => {
            const module = await import(path.join(directory, file));
            const number = file.match(/solution-(\d+)\.ts/)?.[1] || '?';
            return {
                name: `Solution ${number}`,
                fn: module.solution,
                description: module.description || 'No description provided',
                file,
            };
        })
    );

    console.log(`\n🎯 ${problemName.toUpperCase()}`);
    console.log(`📁 Found ${solutions.length} solution(s)\n`);

    // Test all solutions
    console.log('🧪 TEST RESULTS');
    console.log('─'.repeat(80));
    const testResults = solutions.map(({ name, fn, description, file }) => {
        const results = testCases.map((tc: { input: unknown; expected: unknown }) => {
            const { result, time } = measureTime(() => fn(tc.input));
            const pass = JSON.stringify(result) === JSON.stringify(tc.expected);
            return { pass, time };
        });
        const passedCount = results.filter((r: { pass: boolean; time: number }) => r.pass).length;
        const totalTests = results.length;
        const allPass = passedCount === totalTests;
        const avgTime = results.reduce((sum: number, r: { pass: boolean; time: number }) => sum + r.time, 0) / results.length;
        return { name, pass: allPass, passedCount, totalTests, avgTime, description, file };
    });

    console.table(testResults.map(r => ({
        Solution: r.name,
        Status: r.pass ? '✅ Pass' : '❌ Fail',
        Tests: `${r.passedCount}/${r.totalTests}`,
        'Avg Time': `${r.avgTime.toFixed(4)}ms`,
    })));

    // Benchmark all passing solutions
    const passSolutions = solutions.filter((_, i) => testResults[i].pass);

    if (passSolutions.length > 0) {
        console.log('\n⚡ PERFORMANCE BENCHMARK');
        console.log('─'.repeat(80));

        // Run benchmark for ALL test cases (not just first one)
        const benchDetails = passSolutions.map(({ name, fn }) => {
            const allBenchmarks = testCases.map((tc: { input: unknown; expected: unknown }) => {
                const input = typeof tc.input === 'string' ? tc.input.repeat(10) : tc.input;
                return benchmark(name, () => fn(input), 1000);
            });

            // Calculate average across all test cases
            const avgTime = allBenchmarks.reduce((sum: number, b: { avgTime: number }) => sum + b.avgTime, 0) / allBenchmarks.length;
            const minTime = Math.min(...allBenchmarks.map((b: { minTime: number }) => b.minTime));
            const maxTime = Math.max(...allBenchmarks.map((b: { maxTime: number }) => b.maxTime));

            return { name, avgTime, minTime, maxTime, perTestCase: allBenchmarks };
        });

        const benchResults = benchDetails.map(({ name, avgTime, minTime, maxTime }) => ({
            name, avgTime, minTime, maxTime,
        })).sort((a, b) => a.avgTime - b.avgTime);

        const fastest = benchResults[0];
        console.table(benchResults.map((r, i) => ({
            Rank: ['🥇', '🥈', '🥉'][i] || `${i + 1}`,
            Solution: r.name,
            'Avg Time': `${r.avgTime.toFixed(4)}ms`,
            'Min Time': `${r.minTime.toFixed(4)}ms`,
            'Max Time': `${r.maxTime.toFixed(4)}ms`,
            'vs Fastest': i === 0 ? '-' : `+${((r.avgTime / fastest.avgTime - 1) * 100).toFixed(1)}%`,
        })));

        // Show per-test-case breakdown with % comparison
        console.log('\n📊 DETAILED BREAKDOWN (by test case)');
        console.log('─'.repeat(80));

        // Find fastest solution for each test case
        const fastestPerTC = testCases.map((_: unknown, tcIdx: number) => {
            const times = benchDetails.map(d => d.perTestCase[tcIdx].avgTime);
            return Math.min(...times);
        });

        // Create table with % vs fastest for each test case (sorted by rank)
        const detailTableData = benchDetails.map(({ name, avgTime, perTestCase }) => {
            const row: Record<string, string> = { Solution: name };
            perTestCase.forEach((bench: { avgTime: number }, idx: number) => {
                const fastest = fastestPerTC[idx];
                const diff = ((bench.avgTime / fastest - 1) * 100);
                const label = (testCases[idx] as { label?: string }).label || `TC${idx + 1}`;

                let symbol = '';
                if (diff < 5) symbol = '🔥'; // fastest
                else if (diff < 50) symbol = '⚡'; // good
                else if (diff < 200) symbol = '📊'; // ok
                else symbol = '🐌'; // slow

                row[label] = diff === 0 ? '0% 🔥' : `+${diff.toFixed(0)}% ${symbol}`;
            });
            return { ...row, avgTime, name };
        });

        // Sort by avgTime (same as benchmark ranking)
        const sortedDetailTable = detailTableData
            .sort((a, b) => a.avgTime - b.avgTime)
            .map((row, idx) => {
                const rank = ['🥇', '🥈', '🥉'][idx] || `${idx + 1}`;
                const { avgTime: _avgTime, name, ...rest } = row;
                return { Rank: rank, Solution: name, ...rest };
            });

        console.table(sortedDetailTable);

        // Generate README.md
        const markdown = generateReadme(problemName, testResults, benchResults, benchDetails, testCases);
        await write(path.join(directory, 'README.md'), markdown);
        console.log('\n📝 README.md generated');
    }

    // Update progress in category and root READMEs
    const rootDir = path.resolve(directory, '../..');
    const categoryFolder = path.basename(path.resolve(directory, '..'));
    await updateCategoryProgress(categoryFolder, rootDir);
    await updateProgress(rootDir);

    console.log();
}

