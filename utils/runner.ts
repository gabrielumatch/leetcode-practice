import { benchmark, measureTime } from './performance';
import { generateReadme } from './markdown';
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
    const { testCases } = await import(path.join(directory, 'test-cases.ts'));

    // Dynamically import all solutions
    const solutions = await Promise.all(
        solutionFiles.map(async (file) => {
            const module = await import(path.join(directory, file));
            const number = file.match(/solution-(\d+)\.ts/)?.[1] || '?';
            return {
                name: `Solution ${number}`,
                fn: module.solution,
            };
        })
    );

    console.log(`\n🎯 ${problemName.toUpperCase()}`);
    console.log(`📁 Found ${solutions.length} solution(s)\n`);

    // Test all solutions
    console.log('🧪 TEST RESULTS');
    console.log('─'.repeat(80));
    const testResults = solutions.map(({ name, fn }) => {
        const results = testCases.map((tc: { input: any; expected: any }) => {
            const { result, time } = measureTime(() => fn(tc.input));
            const pass = JSON.stringify(result) === JSON.stringify(tc.expected);
            return { pass, time };
        });
        const allPass = results.every((r: { pass: boolean; time: number }) => r.pass);
        const avgTime = results.reduce((sum: number, r: { pass: boolean; time: number }) => sum + r.time, 0) / results.length;
        return { name, pass: allPass, tests: results.length, avgTime };
    });

    console.table(testResults.map(r => ({
        Solution: r.name,
        Status: r.pass ? '✅ Pass' : '❌ Fail',
        Tests: `${r.tests}/${r.tests}`,
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

    console.log();
}

