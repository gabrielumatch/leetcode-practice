# 1 Palindrome

**Last Updated:** Nov 3, 2025, 11:55 PM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0205ms |
| Solution 10 | ✅ Pass | 8/8 | 0.0033ms |
| Solution 11 | ✅ Pass | 8/8 | 0.0056ms |
| Solution 12 | ✅ Pass | 8/8 | 0.0043ms |
| Solution 13 | ✅ Pass | 8/8 | 0.0043ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0077ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0108ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0100ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0035ms |
| Solution 6 | ✅ Pass | 8/8 | 0.0034ms |
| Solution 7 | ✅ Pass | 8/8 | 0.0040ms |
| Solution 8 | ✅ Pass | 8/8 | 0.0027ms |
| Solution 9 | ✅ Pass | 8/8 | 0.0026ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 10 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0256ms | - |
| 🥈 | Solution 12 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0045ms | +18.7% |
| 🥉 | Solution 9 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0056ms | +19.6% |
| 4 | Solution 8 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0073ms | +23.9% |
| 5 | Solution 7 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0070ms | +27.9% |
| 6 | Solution 11 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0068ms | +38.8% |
| 7 | Solution 6 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0037ms | +53.2% |
| 8 | Solution 4 | 0.0000ms | 0.0002ms | 0.0000ms | 0.0065ms | +74.3% |
| 9 | Solution 13 | 0.0000ms | 0.0002ms | 0.0000ms | 0.0059ms | +77.6% |
| 10 | Solution 5 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0050ms | +84.4% |
| 11 | Solution 1 | 0.0001ms | 0.0003ms | 0.0000ms | 0.7356ms | +323.1% |
| 12 | Solution 3 | 0.0002ms | 0.0012ms | 0.0000ms | 1.6217ms | +743.9% |
| 13 | Solution 2 | 0.0003ms | 0.0009ms | 0.0000ms | 0.9326ms | +1006.5% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers)
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Long (31 chars) | Medium (10 chars) | Single space | Long (28 chars) | Short (5 chars) | Short (5 chars) | Very short (2 chars) | Very short (2 chars) |
|------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 10 | +6% ⚡ | 0% 🔥 | 0% 🔥 | +14% ⚡ | +4% 🔥 | +9% ⚡ | +5% 🔥 | 0% 🔥 |
| 🥈 | Solution 12 | +19% ⚡ | +72% 📊 | +3% 🔥 | +27% ⚡ | +5% 🔥 | +15% ⚡ | 0% 🔥 | +3% 🔥 |
| 🥉 | Solution 9 | +1% 🔥 | +27% ⚡ | +35% ⚡ | 0% 🔥 | +9% ⚡ | +61% 📊 | +106% 📊 | +49% ⚡ |
| 4 | Solution 8 | +17% ⚡ | +29% ⚡ | +36% ⚡ | +19% ⚡ | +76% 📊 | 0% 🔥 | +53% 📊 | +8% ⚡ |
| 5 | Solution 7 | +19% ⚡ | +4% 🔥 | +40% ⚡ | +20% ⚡ | 0% 🔥 | +51% 📊 | +104% 📊 | +76% 📊 |
| 6 | Solution 11 | 0% 🔥 | +8% ⚡ | +34% ⚡ | +16% ⚡ | +76% 📊 | +103% 📊 | +158% 📊 | +95% 📊 |
| 7 | Solution 6 | +62% 📊 | +56% 📊 | +3% 🔥 | +78% 📊 | +78% 📊 | +2% 🔥 | +58% 📊 | +7% ⚡ |
| 8 | Solution 4 | +95% 📊 | +69% 📊 | +20% ⚡ | +122% 📊 | +93% 📊 | +37% ⚡ | +103% 📊 | +37% ⚡ |
| 9 | Solution 13 | +79% 📊 | +10% ⚡ | +38% ⚡ | +93% 📊 | +95% 📊 | +113% 📊 | +123% 📊 | +83% 📊 |
| 10 | Solution 5 | +87% 📊 | +49% ⚡ | +39% ⚡ | +108% 📊 | +35% ⚡ | +87% 📊 | +139% 📊 | +99% 📊 |
| 11 | Solution 1 | +335% 🐌 | +382% 🐌 | +292% 🐌 | +392% 🐌 | +291% 🐌 | +281% 🐌 | +437% 🐌 | +418% 🐌 |
| 12 | Solution 3 | +1356% 🐌 | +597% 🐌 | +165% 📊 | +1133% 🐌 | +690% 🐌 | +436% 🐌 | +786% 🐌 | +297% 🐌 |
| 13 | Solution 2 | +1037% 🐌 | +1356% 🐌 | +456% 🐌 | +1163% 🐌 | +1041% 🐌 | +753% 🐌 | +1321% 🐌 | +753% 🐌 |

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
- **Difference:** 1006.5% slower

---

*Generated automatically by benchmarking suite*
