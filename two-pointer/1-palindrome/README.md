# 1 Palindrome

**Last Updated:** Nov 3, 2025, 11:15 PM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0160ms |
| Solution 10 | ✅ Pass | 8/8 | 0.0039ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0095ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0113ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0107ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0042ms |
| Solution 6 | ✅ Pass | 8/8 | 0.0041ms |
| Solution 7 | ✅ Pass | 8/8 | 0.0030ms |
| Solution 8 | ✅ Pass | 8/8 | 0.0027ms |
| Solution 9 | ✅ Pass | 8/8 | 0.0027ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg Time | Min Time | Max Time | vs Fastest |
|------|----------|----------|----------|----------|------------|
| 🥇 | Solution 9 | 0.0005ms | 0.0003ms | 0.0068ms | - |
| 🥈 | Solution 7 | 0.0005ms | 0.0003ms | 0.0112ms | +0.3% |
| 🥉 | Solution 10 | 0.0005ms | 0.0003ms | 0.0260ms | +1.7% |
| 4 | Solution 8 | 0.0005ms | 0.0003ms | 0.0096ms | +3.9% |
| 5 | Solution 6 | 0.0006ms | 0.0004ms | 0.0050ms | +23.5% |
| 6 | Solution 5 | 0.0009ms | 0.0007ms | 0.0060ms | +100.7% |
| 7 | Solution 4 | 0.0013ms | 0.0007ms | 0.0130ms | +169.3% |
| 8 | Solution 1 | 0.0018ms | 0.0013ms | 0.0756ms | +280.3% |
| 9 | Solution 2 | 0.0038ms | 0.0022ms | 0.0184ms | +715.4% |
| 10 | Solution 3 | 0.0045ms | 0.0022ms | 1.9169ms | +875.2% |

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

**Winner:** Solution 9 🥇

- **Fastest:** 0.0005ms average
- **Slowest:** 0.0045ms average
- **Difference:** 875.2% slower

---

*Generated automatically by benchmarking suite*
