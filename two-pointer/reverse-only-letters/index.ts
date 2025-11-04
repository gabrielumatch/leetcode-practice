import { benchmark, measureTime } from '../../utils/performance';
import { testCases } from './test-cases';
import { Glob } from 'bun';
import path from 'path';

// Get problem name from folder name
const problemName = path.basename(import.meta.dir).split('-').map(w =>
    w.charAt(0).toUpperCase() + w.slice(1)
).join(' ');

// Auto-discover all solution files
const glob = new Glob('solution-*.ts');
const solutionFiles = Array.from(glob.scanSync(import.meta.dir)).sort();

// Dynamically import all solutions
const solutions = await Promise.all(
    solutionFiles.map(async (file) => {
        const module = await import(`./${file}`);
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
    const results = testCases.map((tc) => {
        const { result, time } = measureTime(() => fn(tc.input));
        const pass = JSON.stringify(result) === JSON.stringify(tc.expected);
        return { pass, time };
    });
    const allPass = results.every(r => r.pass);
    const avgTime = results.reduce((sum, r) => sum + r.time, 0) / results.length;
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
}

console.log();

