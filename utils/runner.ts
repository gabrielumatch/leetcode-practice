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

        const benchmarkInput = testCases[0].input.repeat(10);
        const benchResults = passSolutions.map(({ name, fn }) =>
            benchmark(name, () => fn(benchmarkInput), 5000)
        ).sort((a, b) => a.avgTime - b.avgTime);

        const fastest = benchResults[0];
        console.table(benchResults.map((r, i) => ({
            Rank: ['🥇', '🥈', '🥉'][i] || `${i + 1}`,
            Solution: r.name,
            'Avg Time': `${r.avgTime.toFixed(4)}ms`,
            'Min Time': `${r.minTime.toFixed(4)}ms`,
            'Max Time': `${r.maxTime.toFixed(4)}ms`,
            'vs Fastest': i === 0 ? '-' : `+${((r.avgTime / fastest.avgTime - 1) * 100).toFixed(1)}%`,
        })));

        // Generate README.md
        const markdown = generateReadme(problemName, testResults, benchResults);
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

