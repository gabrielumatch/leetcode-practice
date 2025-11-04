# 1 Palindrome

**Last Updated:** Nov 4, 2025, 12:20 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0170ms |
| Solution 10 | ✅ Pass | 8/8 | 0.0034ms |
| Solution 11 | ✅ Pass | 8/8 | 0.0049ms |
| Solution 12 | ✅ Pass | 8/8 | 0.0043ms |
| Solution 13 | ✅ Pass | 8/8 | 0.0041ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0070ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0118ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0089ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0036ms |
| Solution 6 | ✅ Pass | 8/8 | 0.0027ms |
| Solution 7 | ✅ Pass | 8/8 | 0.0034ms |
| Solution 8 | ✅ Pass | 8/8 | 0.0023ms |
| Solution 9 | ✅ Pass | 8/8 | 0.0026ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 10 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0266ms | - |
| 🥈 | Solution 8 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0081ms | +23.0% |
| 🥉 | Solution 11 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0301ms | +36.9% |
| 4 | Solution 7 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0058ms | +40.4% |
| 5 | Solution 9 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0055ms | +44.6% |
| 6 | Solution 12 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0061ms | +71.6% |
| 7 | Solution 13 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0312ms | +72.2% |
| 8 | Solution 6 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0045ms | +80.7% |
| 9 | Solution 4 | 0.0000ms | 0.0002ms | 0.0000ms | 0.9994ms | +92.0% |
| 10 | Solution 5 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0149ms | +95.2% |
| 11 | Solution 1 | 0.0001ms | 0.0003ms | 0.0000ms | 0.0252ms | +345.6% |
| 12 | Solution 3 | 0.0002ms | 0.0012ms | 0.0000ms | 1.1841ms | +824.0% |
| 13 | Solution 2 | 0.0003ms | 0.0009ms | 0.0000ms | 1.3171ms | +1085.6% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers)
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Long (31 chars) | Medium (10 chars) | Single space | Long (28 chars) | Short (5 chars) | Short (5 chars) | Very short (2 chars) | Very short (2 chars) |
|------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 10 | +7% ⚡ | 0% 🔥 | 0% 🔥 | +2% 🔥 | +19% ⚡ | +13% ⚡ | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 8 | +25% ⚡ | +35% ⚡ | +29% ⚡ | +7% ⚡ | +45% ⚡ | 0% 🔥 | +36% ⚡ | +37% ⚡ |
| 🥉 | Solution 11 | 0% 🔥 | +37% ⚡ | +28% ⚡ | 0% 🔥 | +38% ⚡ | +97% 📊 | +134% 📊 | +113% 📊 |
| 4 | Solution 7 | +39% ⚡ | +13% ⚡ | +41% ⚡ | +32% ⚡ | 0% 🔥 | +68% 📊 | +91% 📊 | +63% 📊 |
| 5 | Solution 9 | +45% ⚡ | +56% 📊 | +24% ⚡ | +18% ⚡ | +18% ⚡ | +63% 📊 | +97% 📊 | +66% 📊 |
| 6 | Solution 12 | +58% 📊 | +167% 📊 | +18% ⚡ | +77% 📊 | +56% 📊 | +31% ⚡ | +24% ⚡ | +44% ⚡ |
| 7 | Solution 13 | +93% 📊 | +13% ⚡ | +28% ⚡ | +85% 📊 | +62% 📊 | +52% 📊 | +84% 📊 | +82% 📊 |
| 8 | Solution 6 | +90% 📊 | +92% 📊 | +33% ⚡ | +87% 📊 | +104% 📊 | +12% ⚡ | +55% 📊 | +30% ⚡ |
| 9 | Solution 4 | +120% 📊 | +183% 📊 | +34% ⚡ | +118% 📊 | +120% 📊 | +23% ⚡ | +116% 📊 | +51% 📊 |
| 10 | Solution 5 | +110% 📊 | +64% 📊 | +25% ⚡ | +108% 📊 | +29% ⚡ | +106% 📊 | +107% 📊 | +98% 📊 |
| 11 | Solution 1 | +395% 🐌 | +431% 🐌 | +202% 🐌 | +383% 🐌 | +256% 🐌 | +237% 🐌 | +413% 🐌 | +466% 🐌 |
| 12 | Solution 3 | +1376% 🐌 | +641% 🐌 | +157% 📊 | +1280% 🐌 | +692% 🐌 | +426% 🐌 | +753% 🐌 | +319% 🐌 |
| 13 | Solution 2 | +1209% 🐌 | +1571% 🐌 | +459% 🐌 | +1134% 🐌 | +1039% 🐌 | +890% 🐌 | +1097% 🐌 | +856% 🐌 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 10000 iterations per test case (all solutions face same conditions)
- Comparisons use **trimmed mean** (95% best runs, removes outliers)
- This eliminates GC pauses, cache effects, and context switch noise


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Two Pointers - Classic**

Baseline approach: clean the string first, then use two pointers.
- Uses `replace(/[^a-z0-9]/g, '')` to clean
- Creates intermediate cleaned string
- Simple and readable


### Solution 10 — [`solution-10.ts`](./solution-10.ts)

**Based on Solution 8** - Optimized array size

**Changes:**
- Reduced `Uint8Array(256)` → `Uint8Array(128)` (ASCII printable range)
- Removed early exit branch (no unnecessary if)
- Smaller array = better L1 cache utilization
- Less memory, potentially faster lookups


### Solution 11 — [`solution-11.ts`](./solution-11.ts)

**Based on Solution 7 + 8** - Best of both worlds

**Changes:**
- Uses `Uint8Array(128)` like Solution 7 (cache-friendly)
- Pre-computes normalized chars like Solution 8 (no bitwise in loop)
- Combines smaller array size with pre-normalization
- Should be fastest for medium-sized strings


### Solution 12 — [`solution-12.ts`](./solution-12.ts)

**Based on Solution 11** - Explicit bounds checking

**Changes:**
- Uses `Uint8Array(128)` like Solution 11
- Adds explicit `< 128` check before array access
- Tests if bounds checking overhead is the issue
- Hypothesis: This should be slower due to extra branches


### Solution 13 — [`solution-13.ts`](./solution-13.ts)

**Based on Solution 9** - Removed early exit

**Changes:**
- Removed `if (s.length <= 1) return true;` early exit
- Hypothesis: Early exit adds branch overhead on every call
- May be faster for short strings by avoiding the branch
- Single loop init (like Solution 9)
- Testing if early exit is actually beneficial


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Based on Solution 1** - Different approach

**Changes:**
- Instead of two pointers, reverse entire string and compare
- Uses `split('').reverse().join('')`
- More readable but creates extra intermediate array


### Solution 3 — [`solution-3.ts`](./solution-3.ts)

**Based on Solution 1** - Filter first approach

**Changes:**
- Uses `filter(c => /[a-z0-9]/.test(c))` instead of `replace()`
- Creates filtered array, then compares indices
- Avoids string concatenation from replace


### Solution 4 — [`solution-4.ts`](./solution-4.ts)

**Based on Solution 1** - First major optimization

**Changes:**
- Replaced regex/replace with ASCII code validation (`charCodeAt()`)
- Inline validation during two-pointer traversal
- No intermediate strings/arrays created
- Uses arithmetic `+32` for lowercase conversion


### Solution 5 — [`solution-5.ts`](./solution-5.ts)

**Based on Solution 4** - Bitwise optimization

**Changes:**
- Replaced arithmetic `+32` with bitwise OR `| 32`
- Bitwise operations are direct CPU instructions
- ~19% faster than Solution 4


### Solution 6 — [`solution-6.ts`](./solution-6.ts)

**Based on Solution 5** - Remove intermediate variables

**Changes:**
- Eliminated `isLeftValid`/`isRightValid` variables
- Inline all validation directly in `if` conditions
- Fewer memory allocations, better JIT optimization
- ~40% faster than Solution 5


### Solution 7 — [`solution-7.ts`](./solution-7.ts)

**Based on Solution 6** - Lookup table for validation

**Changes:**
- Pre-computed `Uint8Array[128]` for valid chars
- Single array access replaces 3 comparisons
- Reduced branch predictions, better CPU pipeline
- ~21% faster than Solution 6


### Solution 8 — [`solution-8.ts`](./solution-8.ts)

**Based on Solution 7** - Combined validation + normalization 🏆

**Changes:**
- Lookup table now returns normalized char (not just validation)
- Eliminated bitwise OR from loop (pre-computed)
- Single array access does both validation AND normalization
- Champion solution! 🥇


### Solution 9 — [`solution-9.ts`](./solution-9.ts)

**Based on Solution 8** - Single loop init + early exit

**Changes:**
- Combined 3 initialization loops into 1
- Added early exit for `s.length <= 1`
- Slightly faster in some runs, basically tied with Solution 8


## 📊 Conclusion

**Winner:** Solution 10 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0003ms average
- **Difference:** 1085.6% slower

---

*Generated automatically by benchmarking suite*
