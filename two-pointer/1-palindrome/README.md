# 1 Palindrome

**Last Updated:** Nov 3, 2025, 11:04 PM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0140ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0050ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0130ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0094ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0058ms |
| Solution 6 | ✅ Pass | 8/8 | 0.0047ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg Time | Min Time | Max Time | vs Fastest |
|------|----------|----------|----------|----------|------------|
| 🥇 | Solution 6 | 0.0009ms | 0.0005ms | 0.0098ms | - |
| 🥈 | Solution 5 | 0.0011ms | 0.0007ms | 0.0113ms | +25.0% |
| 🥉 | Solution 4 | 0.0017ms | 0.0007ms | 0.0395ms | +95.5% |
| 4 | Solution 1 | 0.0020ms | 0.0014ms | 0.0134ms | +135.1% |
| 5 | Solution 2 | 0.0048ms | 0.0023ms | 0.0414ms | +457.7% |
| 6 | Solution 3 | 0.0063ms | 0.0023ms | 1.2327ms | +630.7% |

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


## 📊 Conclusion

**Winner:** Solution 6 🥇

- **Fastest:** 0.0009ms average
- **Slowest:** 0.0063ms average
- **Difference:** 630.7% slower

---

*Generated automatically by benchmarking suite*
