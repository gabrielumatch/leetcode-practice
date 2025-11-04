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
}

export function generateReadme(
    problemName: string,
    testResults: TestResult[],
    benchResults: BenchResult[]
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

| Rank | Solution | Avg Time | Min Time | Max Time | vs Fastest |
|------|----------|----------|----------|----------|------------|
${benchResults.map((r, i) => {
        const rank = ['🥇', '🥈', '🥉'][i] || `${i + 1}`;
        const vsFastest = i === 0 ? '-' : `+${((r.avgTime / fastest.avgTime - 1) * 100).toFixed(1)}%`;
        return `| ${rank} | ${r.name} | ${r.avgTime.toFixed(4)}ms | ${r.minTime.toFixed(4)}ms | ${r.maxTime.toFixed(4)}ms | ${vsFastest} |`;
    }).join('\n')}

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

