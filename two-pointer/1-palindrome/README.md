# 1 Palindrome

**Last Updated:** Nov 3, 2025, 11:32 PM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0124ms |
| Solution 10 | ✅ Pass | 8/8 | 0.0027ms |
| Solution 11 | ✅ Pass | 8/8 | 0.0041ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0052ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0092ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0075ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0030ms |
| Solution 6 | ✅ Pass | 8/8 | 0.0033ms |
| Solution 7 | ✅ Pass | 8/8 | 0.0021ms |
| Solution 8 | ✅ Pass | 8/8 | 0.0018ms |
| Solution 9 | ✅ Pass | 8/8 | 0.0018ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg Time | Min Time | Max Time | vs Fastest |
|------|----------|----------|----------|----------|------------|
| 🥇 | Solution 11 | 0.0002ms | 0.0000ms | 0.0060ms | - |
| 🥈 | Solution 8 | 0.0002ms | 0.0000ms | 0.0093ms | +2.1% |
| 🥉 | Solution 7 | 0.0002ms | 0.0000ms | 0.0120ms | +8.0% |
| 4 | Solution 10 | 0.0002ms | 0.0000ms | 0.0319ms | +9.4% |
| 5 | Solution 9 | 0.0002ms | 0.0000ms | 0.0052ms | +9.9% |
| 6 | Solution 6 | 0.0002ms | 0.0000ms | 0.0043ms | +19.1% |
| 7 | Solution 5 | 0.0003ms | 0.0000ms | 0.0313ms | +98.2% |
| 8 | Solution 4 | 0.0004ms | 0.0000ms | 0.0139ms | +167.5% |
| 9 | Solution 1 | 0.0006ms | 0.0000ms | 0.0116ms | +270.7% |
| 10 | Solution 2 | 0.0016ms | 0.0001ms | 0.0169ms | +842.8% |
| 11 | Solution 3 | 0.0020ms | 0.0001ms | 1.0822ms | +1093.8% |

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Long (31 chars) | Medium (10 chars) | Single space | Long (28 chars) | Short (5 chars) | Short (5 chars) | Very short (2 chars) | Very short (2 chars) |
|------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 11 | 0% 🔥 | +4% 🔥 | 0% 🔥 | 0% 🔥 | +28% ⚡ | 0% 🔥 | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 8 | +3% 🔥 | +25% ⚡ | +4% 🔥 | +3% 🔥 | 0% 🔥 | +7% ⚡ | +13% ⚡ | +11% ⚡ |
| 🥉 | Solution 7 | +3% 🔥 | +15% ⚡ | +2% 🔥 | +15% ⚡ | +40% ⚡ | +16% ⚡ | +11% ⚡ | +11% ⚡ |
| 4 | Solution 10 | +11% ⚡ | +35% ⚡ | +6% ⚡ | +4% 🔥 | +35% ⚡ | +12% ⚡ | +6% ⚡ | +40% ⚡ |
| 5 | Solution 9 | +15% ⚡ | 0% 🔥 | +8% ⚡ | +3% 🔥 | +34% ⚡ | +26% ⚡ | +29% ⚡ | +9% ⚡ |
| 6 | Solution 6 | +14% ⚡ | +30% ⚡ | +9% ⚡ | +26% ⚡ | +44% ⚡ | +12% ⚡ | +23% ⚡ | +42% ⚡ |
| 7 | Solution 5 | +100% 📊 | +77% 📊 | +55% 📊 | +129% 📊 | +61% 📊 | +20% ⚡ | +17% ⚡ | +50% ⚡ |
| 8 | Solution 4 | +169% 📊 | +152% 📊 | +67% 📊 | +178% 📊 | +243% 🐌 | +130% 📊 | +113% 📊 | +184% 📊 |
| 9 | Solution 1 | +212% 🐌 | +1356% 🐌 | +294% 🐌 | +285% 🐌 | +133% 📊 | +528% 🐌 | +467% 🐌 | +429% 🐌 |
| 10 | Solution 2 | +500% 🐌 | +5805% 🐌 | +550% 🐌 | +765% 🐌 | +1237% 🐌 | +4424% 🐌 | +2332% 🐌 | +967% 🐌 |
| 11 | Solution 3 | +1082% 🐌 | +3324% 🐌 | +290% 🐌 | +762% 🐌 | +1314% 🐌 | +7674% 🐌 | +1683% 🐌 | +636% 🐌 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

*Each test case run with input repeated 10x, averaged over 1000 iterations*


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

**Winner:** Solution 11 🥇

- **Fastest:** 0.0002ms average
- **Slowest:** 0.0020ms average
- **Difference:** 1093.8% slower

---

*Generated automatically by benchmarking suite*
