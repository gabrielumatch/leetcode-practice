import { measureTime } from './performance';
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
        console.log('\n⚡ PERFORMANCE BENCHMARK (Round-Robin)');
        console.log('─'.repeat(80));

        const iterations = 100000;

        // Initialize time storage: [solutionIdx][testCaseIdx][iterationIdx]
        const times: number[][][] = passSolutions.map(() =>
            testCases.map(() => [])
        );

        // Round-robin benchmark: alternate between solutions for fairness
        console.log('⏱️  Running round-robin benchmark...');
        for (let iter = 0; iter < iterations; iter++) {
            for (let tcIdx = 0; tcIdx < testCases.length; tcIdx++) {
                const tc = testCases[tcIdx] as { input: unknown; expected: unknown };
                
                // Run each solution in sequence (round-robin)
                for (let solIdx = 0; solIdx < passSolutions.length; solIdx++) {
                    const { fn } = passSolutions[solIdx];
                    // Use hrtime for nanosecond precision (performance.now() is ~0.1ms on Windows)
                    const start = process.hrtime.bigint();
                    fn(tc.input);
                    const end = process.hrtime.bigint();
                    const timeMs = Number(end - start) / 1_000_000; // Convert ns to ms
                    times[solIdx][tcIdx].push(timeMs);
                }
            }
        }

        // Calculate statistics for each solution
        const benchDetails = passSolutions.map(({ name }, solIdx) => {
            const perTestCase = testCases.map((_: unknown, tcIdx: number) => {
                const tcTimes = times[solIdx][tcIdx];

                // Sort for percentile calculation
                const sorted = [...tcTimes].sort((a, b) => a - b);

                // Statistics
                const avgTime = tcTimes.reduce((sum, t) => sum + t, 0) / tcTimes.length;
                const minTime = sorted[0];
                const maxTime = sorted[sorted.length - 1];

                // Trimmed mean (remove top 5% outliers)
                const trimCount = Math.floor(sorted.length * 0.05);
                const trimmed = sorted.slice(0, sorted.length - trimCount);
                const trimmedAvg = trimmed.reduce((sum, t) => sum + t, 0) / trimmed.length;

                // Percentiles
                const p50 = sorted[Math.floor(sorted.length * 0.50)];
                const p95 = sorted[Math.floor(sorted.length * 0.95)];
                const p99 = sorted[Math.floor(sorted.length * 0.99)];

                return { avgTime, trimmedAvg, minTime, maxTime, p50, p95, p99 };
            });

            // Use trimmed mean across all test cases for ranking (balance between stability and sensitivity)
            const avgTime = perTestCase.reduce((sum: number, b: { trimmedAvg: number }) => sum + b.trimmedAvg, 0) / perTestCase.length;
            const minTime = Math.min(...perTestCase.map((b: { minTime: number }) => b.minTime));
            const maxTime = Math.max(...perTestCase.map((b: { maxTime: number }) => b.maxTime));
            const p95 = Math.max(...perTestCase.map((b: { p95: number }) => b.p95));
            const p99 = Math.max(...perTestCase.map((b: { p99: number }) => b.p99));

            return { name, avgTime, minTime, maxTime, p95, p99, perTestCase };
        });

        const benchResults = benchDetails.map(({ name, avgTime, minTime, maxTime, p95, p99 }) => ({
            name, avgTime, minTime, maxTime, p95, p99,
        })).sort((a, b) => a.avgTime - b.avgTime);

        const fastest = benchResults[0];
        console.table(benchResults.map((r, i) => ({
            Rank: ['🥇', '🥈', '🥉'][i] || `${i + 1}`,
            Solution: r.name,
            'Avg (trim)': `${r.avgTime.toFixed(6)}ms`,
            'P95': `${r.p95.toFixed(6)}ms`,
            'Min': `${r.minTime.toFixed(6)}ms`,
            'Max': `${r.maxTime.toFixed(6)}ms`,
            'vs Fastest': i === 0 ? '-' : `+${((r.avgTime / fastest.avgTime - 1) * 100).toFixed(2)}%`,
        })));

        // Show per-test-case breakdown with % comparison
        console.log('\n📊 DETAILED BREAKDOWN (by test case)');
        console.log('─'.repeat(80));

        // Find fastest solution for each test case (using trimmed mean)
        const fastestPerTC = testCases.map((_: unknown, tcIdx: number) => {
            const times = benchDetails.map(d => d.perTestCase[tcIdx].trimmedAvg);
            return Math.min(...times);
        });

        // Create table with % vs fastest for each test case (sorted by rank, using trimmed mean)
        const detailTableData = benchDetails.map(({ name, avgTime, perTestCase }) => {
            const row: Record<string, string> = { Solution: name };
            perTestCase.forEach((bench: { trimmedAvg: number }, idx: number) => {
                const fastest = fastestPerTC[idx];

                // Handle zero/very small times
                if (fastest === 0 || bench.trimmedAvg === 0) {
                    row[(testCases[idx] as { label?: string }).label || `TC${idx + 1}`] = '~0ms 🔥';
                    return;
                }

                const diff = ((bench.trimmedAvg / fastest - 1) * 100);
                const label = (testCases[idx] as { label?: string }).label || `TC${idx + 1}`;

                // Handle Infinity/NaN
                if (!isFinite(diff)) {
                    row[label] = 'N/A';
                    return;
                }

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

