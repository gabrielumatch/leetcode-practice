# 1 Palindrome

**Last Updated:** Nov 3, 2025, 11:06 PM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0152ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0057ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0137ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0100ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0049ms |
| Solution 6 | ✅ Pass | 8/8 | 0.0034ms |
| Solution 7 | ✅ Pass | 8/8 | 0.0038ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg Time | Min Time | Max Time | vs Fastest |
|------|----------|----------|----------|----------|------------|
| 🥇 | Solution 7 | 0.0005ms | 0.0003ms | 0.0324ms | - |
| 🥈 | Solution 6 | 0.0006ms | 0.0005ms | 0.0062ms | +28.9% |
| 🥉 | Solution 5 | 0.0009ms | 0.0006ms | 0.0056ms | +95.6% |
| 4 | Solution 4 | 0.0012ms | 0.0006ms | 0.0153ms | +152.5% |
| 5 | Solution 1 | 0.0018ms | 0.0013ms | 0.0439ms | +280.1% |
| 6 | Solution 2 | 0.0039ms | 0.0022ms | 0.0473ms | +730.8% |
| 7 | Solution 3 | 0.0043ms | 0.0022ms | 1.1819ms | +830.0% |

## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Two Pointers - Classic**

Baseline approach: clean the string first, then use two pointers.
- Uses `replace(/[^a-z0-9]/g, '')` to clean
- Creates intermediate cleaned string
- Simple and readable


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Reverse and Compare**

Clean the string, reverse it, and compare with original.
- Uses `split('').reverse().join('')`
- Creates two intermediate strings (clean + reversed)
- Most readable but slowest due to array operations


### Solution 3 — [`solution-3.ts`](./solution-3.ts)

**Filter with Regex + Loop**

Filter alphanumeric characters using regex, then check palindrome.
- Uses `filter()` with regex test
- Creates intermediate array
- Faster than reverse, slower than inline validation


### Solution 4 — [`solution-4.ts`](./solution-4.ts)

**Two Pointers with ASCII Validation**

First major optimization: validate using ASCII codes instead of regex.
- Uses `charCodeAt()` for ASCII validation
- Helper functions for validation and case conversion
- No intermediate strings/arrays
- Arithmetic operation `+32` for lowercase conversion


### Solution 5 — [`solution-5.ts`](./solution-5.ts)

**Two Pointers with Bitwise Operations**

Replaced arithmetic with bitwise operations for speed.
- Uses bitwise OR `| 32` instead of `+ 32` for lowercase
- Bitwise operations are faster (direct CPU instruction)
- Still uses intermediate variables for validation
- ~19% faster than Solution 4


### Solution 6 — [`solution-6.ts`](./solution-6.ts)

**Two Pointers - Maximum Optimization** 🏆

Removed all intermediate variables for maximum speed.
- Inline validation directly in `if` conditions
- No `isLeftValid`/`isRightValid` variables
- Bitwise OR for lowercase conversion
- Fewer memory allocations and assignments
- JIT compiler optimizes better with fully inline code
- **40% faster than Solution 5!**


### Solution 7 — [`solution-7.ts`](./solution-7.ts)

**Two Pointers with Lookup Table**

Using a pre-computed lookup table for ASCII validation.
- `Uint8Array[128]` marks valid ASCII codes with 1
- Single array access instead of 3 comparisons
- Bitwise OR for lowercase conversion
- May be faster due to reduced branch predictions
- Trade-off: initial setup cost vs validation speed


## 📊 Conclusion

**Winner:** Solution 7 🥇

- **Fastest:** 0.0005ms average
- **Slowest:** 0.0043ms average
- **Difference:** 830.0% slower

---

*Generated automatically by benchmarking suite*
