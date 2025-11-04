/**
 * Performance utilities for LeetCode problem benchmarking
 */

import { performance } from 'perf_hooks';

interface GlobalWithGC {
    gc?: () => void;
}

interface BenchmarkResult {
    name: string;
    avgTime: number;
    trimmedAvg: number;
    minTime: number;
    maxTime: number;
    p50: number;
    p95: number;
    p99: number;
    iterations: number;
    opsPerSecond: number;
}

interface MemoryResult {
    heapUsed: number;
    heapTotal: number;
    external: number;
    arrayBuffers: number;
}

/**
 * Measure execution time of a function (single run)
 */
export function measureTime<T>(fn: () => T): { result: T; time: number } {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    return {
        result,
        time: end - start,
    };
}

/**
 * Run a function multiple times and get average performance
 */
export function benchmark(
    name: string,
    fn: () => void,
    iterations = 1000
): BenchmarkResult {
    const times: number[] = [];

    // Warmup (não conta no benchmark)
    for (let i = 0; i < Math.min(10, iterations); i++) {
        fn();
    }

    // Benchmark real
    for (let i = 0; i < iterations; i++) {
        const start = performance.now();
        fn();
        const end = performance.now();
        times.push(end - start);
    }

    // Sort times for percentile calculation
    const sortedTimes = [...times].sort((a, b) => a - b);

    // Calculate statistics
    const avgTime = times.reduce((a, b) => a + b, 0) / times.length;
    const minTime = sortedTimes[0];
    const maxTime = sortedTimes[sortedTimes.length - 1];

    // Remove outliers (top 5%) and calculate trimmed mean
    const trimCount = Math.floor(sortedTimes.length * 0.05);
    const trimmedTimes = sortedTimes.slice(0, sortedTimes.length - trimCount);
    const trimmedAvg = trimmedTimes.reduce((a, b) => a + b, 0) / trimmedTimes.length;

    // Percentiles
    const p50 = sortedTimes[Math.floor(sortedTimes.length * 0.50)];
    const p95 = sortedTimes[Math.floor(sortedTimes.length * 0.95)];
    const p99 = sortedTimes[Math.floor(sortedTimes.length * 0.99)];

    const opsPerSecond = 1000 / trimmedAvg; // Use trimmed avg for ops/sec

    return {
        name,
        avgTime,
        trimmedAvg,
        minTime,
        maxTime,
        p50,
        p95,
        p99,
        iterations,
        opsPerSecond,
    };
}

/**
 * Compare multiple implementations
 */
export function compareImplementations(
    implementations: Array<{ name: string; fn: () => void }>,
    iterations = 1000
): void {
    console.log('\n🏆 Performance Comparison');
    console.log('='.repeat(80));

    const results = implementations.map(({ name, fn }) =>
        benchmark(name, fn, iterations)
    );

    // Sort by avgTime (fastest first)
    results.sort((a, b) => a.avgTime - b.avgTime);

    const fastest = results[0];

    results.forEach((result, index) => {
        const emoji = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '  ';
        const percentSlower =
            index === 0
                ? ''
                : ` (${((result.avgTime / fastest.avgTime - 1) * 100).toFixed(1)}% slower)`;

        console.log(`\n${emoji} ${result.name}${percentSlower}`);
        console.log(`   Avg: ${result.avgTime.toFixed(4)}ms`);
        console.log(`   Min: ${result.minTime.toFixed(4)}ms`);
        console.log(`   Max: ${result.maxTime.toFixed(4)}ms`);
        console.log(`   Ops/sec: ${Math.round(result.opsPerSecond).toLocaleString()}`);
    });

    console.log('\n' + '='.repeat(80));
}

/**
 * Measure memory usage before and after function execution
 */
export function measureMemory<T>(fn: () => T): {
    result: T;
    memoryUsed: number;
    before: MemoryResult;
    after: MemoryResult;
} {
    // Force garbage collection if available
    const g = globalThis as unknown as GlobalWithGC;
    if (typeof g.gc === 'function') {
        g.gc();
    }

    const before = process.memoryUsage();
    const result = fn();

    // Keep result in memory to prevent optimization
    const resultStr = JSON.stringify(result);

    const after = process.memoryUsage();

    // Calculate actual memory used
    const memoryUsed = Math.max(0, after.heapUsed - before.heapUsed);

    // Prevent optimization by "using" resultStr
    if (resultStr.length < 0) console.log(resultStr);

    return {
        result,
        memoryUsed,
        before: {
            heapUsed: before.heapUsed,
            heapTotal: before.heapTotal,
            external: before.external,
            arrayBuffers: before.arrayBuffers,
        },
        after: {
            heapUsed: after.heapUsed,
            heapTotal: after.heapTotal,
            external: after.external,
            arrayBuffers: after.arrayBuffers,
        },
    };
}

/**
 * Format bytes to human readable
 */
export function formatBytes(bytes: number): string {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(2)} ${sizes[i]}`;
}

/**
 * Print memory usage in readable format
 */
export function printMemoryUsage(label: string, memoryResult: MemoryResult): void {
    console.log(`\n💾 ${label}`);
    console.log(`   Heap Used: ${formatBytes(memoryResult.heapUsed)}`);
    console.log(`   Heap Total: ${formatBytes(memoryResult.heapTotal)}`);
    console.log(`   External: ${formatBytes(memoryResult.external)}`);
}

/**
 * Test a function with multiple inputs and verify outputs
 */
export function testCases<TInput, TOutput>(
    fn: (input: TInput) => TOutput,
    cases: Array<{ input: TInput; expected: TOutput; name?: string }>
): void {
    console.log('\n🧪 Running Test Cases');
    console.log('='.repeat(80));

    let passed = 0;
    let failed = 0;

    cases.forEach((testCase, index) => {
        const name = testCase.name || `Test ${index + 1}`;
        const { result, time } = measureTime(() => fn(testCase.input));

        const isEqual =
            JSON.stringify(result) === JSON.stringify(testCase.expected);

        if (isEqual) {
            console.log(`✅ ${name} - Passed (${time.toFixed(4)}ms)`);
            passed++;
        } else {
            console.log(`❌ ${name} - Failed (${time.toFixed(4)}ms)`);
            console.log(`   Expected: ${JSON.stringify(testCase.expected)}`);
            console.log(`   Got:      ${JSON.stringify(result)}`);
            failed++;
        }
    });

    console.log('\n' + '='.repeat(80));
    console.log(`📊 Results: ${passed} passed, ${failed} failed`);
}

/**
 * Big O notation complexity analyzer (experimental)
 */
export function analyzeComplexity(
    fn: (size: number) => void,
    sizes: number[] = [10, 100, 1000, 10000]
): void {
    console.log('\n📈 Time Complexity Analysis');
    console.log('='.repeat(80));

    const results = sizes.map((size) => {
        const { time } = measureTime(() => fn(size));
        return { size, time };
    });

    results.forEach((result, index) => {
        const ratio =
            index > 0 ? result.time / results[index - 1].time : 1;
        const sizeRatio =
            index > 0 ? result.size / results[index - 1].size : 1;

        console.log(`\nInput size: ${result.size.toLocaleString()}`);
        console.log(`   Time: ${result.time.toFixed(4)}ms`);
        if (index > 0) {
            console.log(`   Ratio: ${ratio.toFixed(2)}x (size ${sizeRatio}x)`);
        }
    });

    console.log('\n' + '='.repeat(80));
}

