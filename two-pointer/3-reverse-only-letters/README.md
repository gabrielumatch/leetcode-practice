# 3 Reverse Only Letters

**Last Updated:** Nov 4, 2025, 12:05 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 10/10 | 0.0141ms |
| Solution 2 | ✅ Pass | 10/10 | 0.0203ms |
| Solution 3 | ✅ Pass | 10/10 | 0.0150ms |
| Solution 4 | ✅ Pass | 10/10 | 0.0110ms |
| Solution 5 | ✅ Pass | 10/10 | 0.0067ms |
| Solution 6 | ✅ Pass | 10/10 | 0.0044ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 6 | 0.0001ms | 0.0005ms | 0.0000ms | 1.2365ms | - |
| 🥈 | Solution 5 | 0.0001ms | 0.0006ms | 0.0000ms | 1.5088ms | +9.7% |
| 🥉 | Solution 1 | 0.0002ms | 0.0006ms | 0.0000ms | 1.0990ms | +33.2% |
| 4 | Solution 4 | 0.0002ms | 0.0009ms | 0.0000ms | 1.5326ms | +94.9% |
| 5 | Solution 2 | 0.0002ms | 0.0009ms | 0.0000ms | 1.0825ms | +104.2% |
| 6 | Solution 3 | 0.0004ms | 0.0012ms | 0.0000ms | 1.1721ms | +228.2% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers)
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Short (4 letters) | Medium (9 letters) | Long (15 letters) | No letters | Only letters | Single letter | Only numbers | Letters at edges | Letters in middle | Mixed alphanumeric |
|------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 6 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 | +33% ⚡ | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 5 | +39% ⚡ | +20% ⚡ | +14% ⚡ | +4% 🔥 | 0% 🔥 | +30% ⚡ | +1% 🔥 | +4% 🔥 | +37% ⚡ | +19% ⚡ |
| 🥉 | Solution 1 | +23% ⚡ | +45% ⚡ | +39% ⚡ | +31% ⚡ | +50% ⚡ | +37% ⚡ | +26% ⚡ | +26% ⚡ | +44% ⚡ | +26% ⚡ |
| 4 | Solution 4 | +87% 📊 | +109% 📊 | +115% 📊 | +103% 📊 | +49% ⚡ | +193% 📊 | +171% 📊 | +100% 📊 | +60% 📊 | +89% 📊 |
| 5 | Solution 2 | +77% 📊 | +118% 📊 | +128% 📊 | +136% 📊 | +41% ⚡ | +154% 📊 | +202% 🐌 | +75% 📊 | +110% 📊 | +97% 📊 |
| 6 | Solution 3 | +226% 🐌 | +290% 🐌 | +288% 🐌 | +57% 📊 | +210% 🐌 | +424% 🐌 | +3% 🔥 | +140% 📊 | +78% 📊 | +207% 🐌 |

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


### Solution 6 — [`solution-6.ts`](./solution-6.ts)

**Based on Solution 5** - Temp variable swap optimization 🚀

**Changes:**
- Kept `split('')` + `join('')` (optimized by V8 engine)
- Eliminated destructuring swap → temp variable (faster, no array allocation)
- Lookup table still O(1) for letter validation
- Less overhead in swap operation


## 📊 Conclusion

**Winner:** Solution 6 🥇

- **Fastest:** 0.0001ms average
- **Slowest:** 0.0004ms average
- **Difference:** 228.2% slower

---

*Generated automatically by benchmarking suite*
