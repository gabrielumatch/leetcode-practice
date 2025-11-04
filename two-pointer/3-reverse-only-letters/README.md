# 3 Reverse Only Letters

**Last Updated:** Nov 4, 2025, 12:02 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 10/10 | 0.0112ms |
| Solution 2 | ✅ Pass | 10/10 | 0.0173ms |
| Solution 3 | ✅ Pass | 10/10 | 0.0124ms |
| Solution 4 | ✅ Pass | 10/10 | 0.0090ms |
| Solution 5 | ✅ Pass | 10/10 | 0.0059ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 5 | 0.0001ms | 0.0006ms | 0.0000ms | 0.7334ms | - |
| 🥈 | Solution 1 | 0.0002ms | 0.0007ms | 0.0000ms | 2.4300ms | +25.8% |
| 🥉 | Solution 2 | 0.0002ms | 0.0009ms | 0.0000ms | 1.3156ms | +75.3% |
| 4 | Solution 4 | 0.0002ms | 0.0009ms | 0.0000ms | 1.1179ms | +78.4% |
| 5 | Solution 3 | 0.0004ms | 0.0013ms | 0.0000ms | 1.1611ms | +189.7% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers)
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Short (4 letters) | Medium (9 letters) | Long (15 letters) | No letters | Only letters | Single letter | Only numbers | Letters at edges | Letters in middle | Mixed alphanumeric |
|------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 5 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 1 | +15% ⚡ | +52% 📊 | +30% ⚡ | +26% ⚡ | +59% 📊 | +16% ⚡ | +70% 📊 | +25% ⚡ | +52% 📊 | +16% ⚡ |
| 🥉 | Solution 2 | +103% 📊 | +62% 📊 | +83% 📊 | +138% 📊 | +83% 📊 | +121% 📊 | +150% 📊 | +106% 📊 | +60% 📊 | +77% 📊 |
| 4 | Solution 4 | +81% 📊 | +74% 📊 | +75% 📊 | +116% 📊 | +75% 📊 | +132% 📊 | +127% 📊 | +65% 📊 | +91% 📊 | +86% 📊 |
| 5 | Solution 3 | +205% 🐌 | +232% 🐌 | +216% 🐌 | +46% ⚡ | +225% 🐌 | +324% 🐌 | +49% ⚡ | +139% 📊 | +70% 📊 | +181% 📊 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 10000 iterations per test case (all solutions face same conditions)
- Comparisons use **trimmed mean** (95% best runs, removes outliers)
- This eliminates GC pauses, cache effects, and context switch noise


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)
No description provided

### Solution 2 — [`solution-2.ts`](./solution-2.ts)
No description provided

### Solution 3 — [`solution-3.ts`](./solution-3.ts)
No description provided

### Solution 4 — [`solution-4.ts`](./solution-4.ts)
No description provided

### Solution 5 — [`solution-5.ts`](./solution-5.ts)

**Based on Solution 1** - Lookup table optimization 🚀

**Changes:**
- Replaced `/^[a-zA-Z]$/.test()` regex with `Uint8Array` lookup table
- Pre-computed letter validation (A-Z: 65-90, a-z: 97-122)
- Direct ASCII code check via `charCodeAt()`
- O(1) lookup vs regex overhead
- Cache-friendly (128 bytes fits in L1 cache)


## 📊 Conclusion

**Winner:** Solution 5 🥇

- **Fastest:** 0.0001ms average
- **Slowest:** 0.0004ms average
- **Difference:** 189.7% slower

---

*Generated automatically by benchmarking suite*
