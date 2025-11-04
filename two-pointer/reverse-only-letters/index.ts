import { compareImplementations, testCases as runTests } from '../../utils/performance';
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

console.log(`🎯 ${problemName.toUpperCase()}\n`);
console.log(`Found ${solutions.length} solutions\n`);

// Run tests on first solution
console.log(`Testing ${solutions[0].name}:`);
runTests(solutions[0].fn, testCases);

// Benchmark all solutions
const benchmarkInput = testCases[0].input.repeat(10);
compareImplementations(
    solutions.map(({ name, fn }) => ({
        name,
        fn: () => fn(benchmarkInput),
    })),
    5000
);

