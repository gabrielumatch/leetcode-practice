import { measureTime } from './performance';
import { generateReadme } from './markdown';
import { updateProgress, updateCategoryProgress } from './update-progress';
import { Glob, write } from 'bun';
import path from 'path';

interface BenchmarkOptions {
    solutionNumber?: number;  // Ex: 2 para solution-2.ts
    testCaseIndex?: number;   // Ex: 0 para o primeiro test case
    skipBenchmark?: boolean;  // Pular benchmark de performance (útil para debug)
}

/**
 * Parse command line arguments
 * Supports: --solution 2, -s 2, --test-case 0, -t 0, --skip-benchmark
 */
function parseArgs(): BenchmarkOptions {
    const args = process.argv.slice(2);
    const options: BenchmarkOptions = {};

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        const nextArg = args[i + 1];

        if ((arg === '--solution' || arg === '-s') && nextArg) {
            options.solutionNumber = parseInt(nextArg, 10);
            i++;
        } else if ((arg === '--test-case' || arg === '-t') && nextArg) {
            options.testCaseIndex = parseInt(nextArg, 10);
            i++;
        } else if (arg === '--skip-benchmark' || arg === '--skip') {
            options.skipBenchmark = true;
        }
    }

    return options;
}

function loadDebugConfig(rootDir: string, currentProblemDir: string): BenchmarkOptions | undefined {
    const { readFileSync, existsSync } = require('fs');
    const { join, relative } = require('path');
    const debugConfigPath = join(rootDir, 'utils/debug-config.json');

    if (existsSync(debugConfigPath)) {
        try {
            const config = JSON.parse(readFileSync(debugConfigPath, 'utf-8'));
            
            // Check if config is for this specific problem (or global if no problemPath specified)
            const problemPath = relative(rootDir, currentProblemDir).replace(/\\/g, '/');
            if (config.problemPath && config.problemPath !== problemPath) {
                // Config is for a different problem, ignore it
                return undefined;
            }
            
            if (config.solutionNumber !== null || config.testCaseIndex !== null || config.skipBenchmark) {
                return {
                    solutionNumber: config.solutionNumber ?? undefined,
                    testCaseIndex: config.testCaseIndex ?? undefined,
                    skipBenchmark: config.skipBenchmark || undefined,
                };
            }
        } catch (e) {
            // Ignore parse errors
        }
    }
    return undefined;
}

export async function runBenchmark(directory: string, options?: BenchmarkOptions) {
    // Priority: explicit options > command line args > debug config file
    let opts = options;
    
    if (!opts) {
        // First try command line args
        opts = parseArgs();
        
        // Only use debug config if no command line args were provided
        // (for debugger when args don't work)
        if (!opts.solutionNumber && opts.testCaseIndex === undefined && !opts.skipBenchmark) {
            const rootDir = path.resolve(directory, '../..');
            const debugOpts = loadDebugConfig(rootDir, directory);
            
            if (debugOpts) {
                opts = debugOpts;
                console.log('🔧 Using debug config:', opts);
            }
        }
    }
    
    // Debug: confirm what options we're using
    if (opts.solutionNumber !== undefined || opts.testCaseIndex !== undefined || opts.skipBenchmark) {
        console.log(`\n🔧 Using options: solution=${opts.solutionNumber ?? 'all'}, testCase=${opts.testCaseIndex ?? 'all'}, skipBenchmark=${opts.skipBenchmark ?? false}\n`);
    }
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
    let solutions = await Promise.all(
        solutionFiles.map(async (file) => {
            const module = await import(path.join(directory, file));
            const number = file.match(/solution-(\d+)\.ts/)?.[1] || '?';
            return {
                name: `Solution ${number}`,
                fn: module.solution,
                description: module.description || 'No description provided',
                file,
                number: parseInt(number, 10),
            };
        })
    );

    // Filter by solution number if specified
    if (opts.solutionNumber !== undefined) {
        solutions = solutions.filter(s => s.number === opts.solutionNumber);
        if (solutions.length === 0) {
            console.error(`❌ Solution ${opts.solutionNumber} not found`);
            console.error(`💡 Available solutions: ${solutionFiles.map(f => f.match(/solution-(\d+)\.ts/)?.[1]).filter(Boolean).join(', ')}`);
            process.exit(1);
        }
        console.log(`🔍 Filtered to Solution ${opts.solutionNumber}\n`);
    }

    console.log(`\n🎯 ${problemName.toUpperCase()}`);
    console.log(`📁 Found ${solutions.length} solution(s)\n`);

    // Filter test cases if specified
    let filteredTestCases = testCases;
    if (opts.testCaseIndex !== undefined) {
        if (opts.testCaseIndex < 0 || opts.testCaseIndex >= testCases.length) {
            console.error(`❌ Test case index ${opts.testCaseIndex} out of range`);
            console.error(`💡 Available test cases: 0-${testCases.length - 1}`);
            process.exit(1);
        }
        filteredTestCases = [testCases[opts.testCaseIndex]];
        const tc = filteredTestCases[0] as { label?: string };
        console.log(`🔍 Filtered to test case ${opts.testCaseIndex}: ${tc.label || `Test Case ${opts.testCaseIndex + 1}`}`);
        console.log(`📊 Will run ${filteredTestCases.length} test case(s) instead of ${testCases.length}\n`);
    }

    // Test all solutions
    console.log('🧪 TEST RESULTS');
    console.log('─'.repeat(80));
    const testResults = solutions.map(({ name, fn, description, file }) => {
        const results = filteredTestCases.map((tc: { input: unknown; expected: unknown; label?: string }, idx: number) => {
            // Debug: confirm we're only running filtered test cases
            if (opts.testCaseIndex !== undefined && idx > 0) {
                console.warn(`⚠️  WARNING: Running test case ${idx} but should only run one!`);
            }
            // Show detailed result for debug mode (single test case) - BEFORE execution
            if (opts.testCaseIndex !== undefined) {
                const tcLabel = (tc as { label?: string }).label || `Test Case ${idx + 1}`;
                console.log(`\n📋 ${tcLabel}:`);
                console.log(`   Input:    ${JSON.stringify(tc.input)}`);
                console.log(`   Expected: ${JSON.stringify(tc.expected)}`);
                console.log(`   Running solution...\n`);
            }

            // Clone input array to avoid mutations affecting other solutions
            const inputClone = Array.isArray(tc.input) ? [...tc.input as number[]] : tc.input;
            const { result, time } = measureTime(() => fn(inputClone));
            const pass = JSON.stringify(result) === JSON.stringify(tc.expected);

            // Show detailed result for debug mode (single test case) - AFTER execution
            if (opts.testCaseIndex !== undefined) {
                console.log(`   Got:      ${JSON.stringify(result)}`);
                console.log(`   Status:   ${pass ? '✅ PASS' : '❌ FAIL'}`);
                console.log(`   Time:     ${time.toFixed(4)}ms`);
            }

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

    // Benchmark all passing solutions (skip if in debug mode)
    const passSolutions = solutions.filter((_, i) => testResults[i].pass);

    if (passSolutions.length > 0 && !opts.skipBenchmark) {
        console.log('\n⚡ PERFORMANCE BENCHMARK (Round-Robin)');
        console.log('─'.repeat(80));
        console.log('⚠️  Note: console.log from solutions are suppressed during benchmark\n');

        const iterations = 100000;

        // Suppress console.log during benchmark
        const originalLog = console.log;
        const originalError = console.error;
        const originalWarn = console.warn;
        const suppressedLogs: any[] = [];
        
        // Override console methods to suppress output during benchmark
        console.log = (...args: any[]) => {
            suppressedLogs.push(['log', ...args]);
        };
        console.error = (...args: any[]) => {
            suppressedLogs.push(['error', ...args]);
        };
        console.warn = (...args: any[]) => {
            suppressedLogs.push(['warn', ...args]);
        };

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
                    // Clone input array to avoid mutations affecting other solutions
                    const inputClone = Array.isArray(tc.input) ? [...tc.input as number[]] : tc.input;
                    fn(inputClone);
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

        // Restore original console methods
        console.log = originalLog;
        console.error = originalError;
        console.warn = originalWarn;

        // Generate README.md (skip in debug mode)
        if (!opts.testCaseIndex && !opts.solutionNumber) {
            const markdown = generateReadme(problemName, testResults, benchResults, benchDetails, testCases);
            await write(path.join(directory, 'README.md'), markdown);
            console.log('\n📝 README.md generated');
        }
    } else if (opts.skipBenchmark) {
        console.log('\n⏭️  Benchmark skipped (debug mode)');
    }

    // Update progress in category and root READMEs (skip in debug mode)
    if (!opts.testCaseIndex && !opts.solutionNumber) {
        const rootDir = path.resolve(directory, '../..');
        const categoryFolder = path.basename(path.resolve(directory, '..'));
        await updateCategoryProgress(categoryFolder, rootDir);
        await updateProgress(rootDir);
    }

    console.log();
}

