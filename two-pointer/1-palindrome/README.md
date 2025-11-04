# 1 Palindrome

**Last Updated:** Nov 3, 2025, 11:01 PM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0125ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0049ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0102ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0096ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0041ms |
| Solution 6 | ✅ Pass | 8/8 | 0.0029ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg Time | Min Time | Max Time | vs Fastest |
|------|----------|----------|----------|----------|------------|
| 🥇 | Solution 6 | 0.0006ms | 0.0005ms | 0.0067ms | - |
| 🥈 | Solution 5 | 0.0010ms | 0.0007ms | 0.0115ms | +54.2% |
| 🥉 | Solution 4 | 0.0012ms | 0.0006ms | 0.0245ms | +88.9% |
| 4 | Solution 1 | 0.0017ms | 0.0014ms | 0.0402ms | +172.0% |
| 5 | Solution 2 | 0.0039ms | 0.0022ms | 0.0499ms | +524.8% |
| 6 | Solution 3 | 0.0053ms | 0.0023ms | 1.6023ms | +740.3% |

## 📝 Solution Descriptions

### Solution 1

**Two Pointers - Classic**

Baseline approach: clean the string first, then use two pointers.
- Uses `replace(/[^a-z0-9]/g, '')` to clean
- Creates intermediate cleaned string
- Simple and readable


### Solution 2

**Reverse and Compare**

Clean the string, reverse it, and compare with original.
- Uses `split('').reverse().join('')`
- Creates two intermediate strings (clean + reversed)
- Most readable but slowest due to array operations


### Solution 3

**Filter with Regex + Loop**

Filter alphanumeric characters using regex, then check palindrome.
- Uses `filter()` with regex test
- Creates intermediate array
- Faster than reverse, slower than inline validation


### Solution 4

**Two Pointers with ASCII Validation**

First major optimization: validate using ASCII codes instead of regex.
- Uses `charCodeAt()` for ASCII validation
- Helper functions for validation and case conversion
- No intermediate strings/arrays
- Arithmetic operation `+32` for lowercase conversion


### Solution 5

**Two Pointers with Bitwise Operations**

Replaced arithmetic with bitwise operations for speed.
- Uses bitwise OR `| 32` instead of `+ 32` for lowercase
- Bitwise operations are faster (direct CPU instruction)
- Still uses intermediate variables for validation
- ~19% faster than Solution 4


### Solution 6

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

- **Fastest:** 0.0006ms average
- **Slowest:** 0.0053ms average
- **Difference:** 740.3% slower

---

*Generated automatically by benchmarking suite*
