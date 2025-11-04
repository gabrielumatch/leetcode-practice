interface TestResult {
    name: string;
    pass: boolean;
    passedCount: number;
    totalTests: number;
    avgTime: number;
    description: string;
    file: string;
}

interface BenchResult {
    name: string;
    avgTime: number;
    minTime: number;
    maxTime: number;
    p95: number;
    p99: number;
}

interface BenchDetail {
    name: string;
    avgTime: number;
    minTime: number;
    maxTime: number;
    perTestCase: { avgTime: number }[];
}

export function generateReadme(
    problemName: string,
    testResults: TestResult[],
    benchResults: BenchResult[],
    benchDetails?: BenchDetail[],
    testCases?: { label?: string }[]
): string {
    const fastest = benchResults[0];
    const now = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
    });

    return `# ${problemName}

**Last Updated:** ${now}

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
${testResults.map(r =>
        `| ${r.name} | ${r.pass ? '✅ Pass' : '❌ Fail'} | ${r.passedCount}/${r.totalTests} | ${r.avgTime.toFixed(4)}ms |`
    ).join('\n')}

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
${benchResults.map((r, i) => {
        const rank = ['🥇', '🥈', '🥉'][i] || `${i + 1}`;
        const vsFastest = i === 0 ? '-' : `+${((r.avgTime / fastest.avgTime - 1) * 100).toFixed(1)}%`;
        return `| ${rank} | ${r.name} | ${r.avgTime.toFixed(4)}ms | ${r.p95.toFixed(4)}ms | ${r.minTime.toFixed(4)}ms | ${r.maxTime.toFixed(4)}ms | ${vsFastest} |`;
    }).join('\n')}

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers)
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

## 📊 Detailed Breakdown (by test case)

${benchDetails && testCases ? `
| Rank | Solution | ${testCases.map((tc, i) => tc.label || `TC${i + 1}`).join(' | ')} |
|------|----------|${testCases.map(() => '----------').join('|')}|
${(() => {
    // Find fastest for each test case
        const fastestPerTC = testCases.map((_, tcIdx) => {
            const times = benchDetails.map(d => d.perTestCase[tcIdx].avgTime);
            return Math.min(...times);
        });

        // Sort by avgTime and add rank
        return benchDetails
            .sort((a, b) => a.avgTime - b.avgTime)
            .map((d, idx) => {
                const rank = ['🥇', '🥈', '🥉'][idx] || String(idx + 1);
                const values = d.perTestCase.map((b, tcIdx) => {
                    const fastest = fastestPerTC[tcIdx];

                    // Handle zero/very small times
                    if (fastest === 0 || b.avgTime === 0) {
                        return '~0ms 🔥';
                    }

                    const diff = ((b.avgTime / fastest - 1) * 100);

                    // Handle Infinity/NaN
                    if (!isFinite(diff)) {
                        return 'N/A';
                    }

                    let symbol = '';
                    if (diff < 5) symbol = '🔥';
                    else if (diff < 50) symbol = '⚡';
                    else if (diff < 200) symbol = '📊';
                    else symbol = '🐌';

                    return diff === 0 ? '0% 🔥' : '+' + diff.toFixed(0) + '% ' + symbol;
                }).join(' | ');

                return '| ' + rank + ' | ' + d.name + ' | ' + values + ' |';
            }).join('\n');
    })()}

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 10000 iterations per test case (all solutions face same conditions)
- Comparisons use **trimmed mean** (95% best runs, removes outliers)
- This eliminates GC pauses, cache effects, and context switch noise
` : ''}

## 📝 Solution Descriptions

${testResults.map(r =>
        `### ${r.name} — [\`${r.file}\`](./${r.file})\n${r.description}`
    ).join('\n\n')}

## 📊 Conclusion

**Winner:** ${benchResults[0].name} 🥇

- **Fastest:** ${benchResults[0].avgTime.toFixed(4)}ms average
- **Slowest:** ${benchResults[benchResults.length - 1].avgTime.toFixed(4)}ms average
- **Difference:** ${((benchResults[benchResults.length - 1].avgTime / benchResults[0].avgTime - 1) * 100).toFixed(1)}% slower

---

*Generated automatically by benchmarking suite*
`;
}

