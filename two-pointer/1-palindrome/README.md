# 1 Palindrome

**Last Updated:** Nov 3, 2025, 11:26 PM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0149ms |
| Solution 10 | ✅ Pass | 8/8 | 0.0033ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0084ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0133ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0106ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0040ms |
| Solution 6 | ✅ Pass | 8/8 | 0.0032ms |
| Solution 7 | ✅ Pass | 8/8 | 0.0024ms |
| Solution 8 | ✅ Pass | 8/8 | 0.0020ms |
| Solution 9 | ✅ Pass | 8/8 | 0.0018ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg Time | Min Time | Max Time | vs Fastest |
|------|----------|----------|----------|----------|------------|
| 🥇 | Solution 8 | 0.0002ms | 0.0000ms | 0.0121ms | - |
| 🥈 | Solution 9 | 0.0002ms | 0.0000ms | 0.0058ms | +4.2% |
| 🥉 | Solution 7 | 0.0002ms | 0.0000ms | 0.0120ms | +5.2% |
| 4 | Solution 10 | 0.0002ms | 0.0000ms | 0.0249ms | +5.5% |
| 5 | Solution 6 | 0.0002ms | 0.0000ms | 0.0047ms | +11.6% |
| 6 | Solution 5 | 0.0003ms | 0.0000ms | 0.0076ms | +85.5% |
| 7 | Solution 4 | 0.0005ms | 0.0000ms | 0.0131ms | +162.4% |
| 8 | Solution 1 | 0.0006ms | 0.0000ms | 0.0136ms | +239.0% |
| 9 | Solution 2 | 0.0016ms | 0.0001ms | 0.0221ms | +813.5% |
| 10 | Solution 3 | 0.0021ms | 0.0001ms | 1.0369ms | +1104.4% |

## 📊 Detailed Breakdown (by test case)


| Solution | Long (31 chars) | Medium (10 chars) | Single space | Long (28 chars) | Short (5 chars) | Short (5 chars) | Very short (2 chars) | Very short (2 chars) |
|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| Solution 1 | +178% 📊 | +2351% 🐌 | +312% 🐌 | +284% 🐌 | +73% 📊 | +393% 🐌 | +330% 🐌 | +293% 🐌 |
| Solution 10 | +10% ⚡ | +108% 📊 | +1% 🔥 | +2% 🔥 | +2% 🔥 | +6% ⚡ | 0% 🔥 | +36% ⚡ |
| Solution 2 | +470% 🐌 | +10460% 🐌 | +597% 🐌 | +775% 🐌 | +886% 🐌 | +3916% 🐌 | +2774% 🐌 | +827% 🐌 |
| Solution 3 | +1066% 🐌 | +6857% 🐌 | +378% 🐌 | +784% 🐌 | +898% 🐌 | +7846% 🐌 | +2184% 🐌 | +669% 🐌 |
| Solution 4 | +154% 📊 | +309% 🐌 | +131% 📊 | +172% 📊 | +205% 🐌 | +170% 📊 | +239% 🐌 | +212% 🐌 |
| Solution 5 | +89% 📊 | +142% 📊 | +44% ⚡ | +118% 📊 | +36% ⚡ | 0% 🔥 | +33% ⚡ | +32% ⚡ |
| Solution 6 | +8% ⚡ | +107% 📊 | 0% 🔥 | +22% ⚡ | +4% 🔥 | +8% ⚡ | +37% ⚡ | +24% ⚡ |
| Solution 7 | +14% ⚡ | 0% 🔥 | +20% ⚡ | 0% 🔥 | 0% 🔥 | +9% ⚡ | +28% ⚡ | 0% 🔥 |
| Solution 8 | 0% 🔥 | +99% 📊 | +10% ⚡ | +0% 🔥 | +1% 🔥 | +9% ⚡ | +37% ⚡ | +2% 🔥 |
| Solution 9 | +2% 🔥 | +165% 📊 | +9% ⚡ | +6% ⚡ | +2% 🔥 | +4% 🔥 | +39% ⚡ | +20% ⚡ |

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

**Winner:** Solution 8 🥇

- **Fastest:** 0.0002ms average
- **Slowest:** 0.0021ms average
- **Difference:** 1104.4% slower

---

*Generated automatically by benchmarking suite*
