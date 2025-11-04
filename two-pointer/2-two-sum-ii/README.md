# 2 Two Sum Ii

**Last Updated:** Nov 4, 2025, 12:28 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0040ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0027ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0053ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0028ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0033ms |
| Solution 6 | ✅ Pass | 8/8 | 0.0059ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 4 | 0.000025ms | 0.000100ms | 0.000000ms | 0.031100ms | - |
| 🥈 | Solution 5 | 0.000025ms | 0.000100ms | 0.000000ms | 0.791600ms | +2.49% |
| 🥉 | Solution 1 | 0.000026ms | 0.000100ms | 0.000000ms | 0.776600ms | +2.88% |
| 4 | Solution 2 | 0.000027ms | 0.000100ms | 0.000000ms | 1.161400ms | +7.27% |
| 5 | Solution 3 | 0.000033ms | 0.000100ms | 0.000000ms | 1.302500ms | +34.92% |
| 6 | Solution 6 | 0.000042ms | 0.000100ms | 0.000000ms | 0.786200ms | +69.95% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Example 3 (negative) | Last two elements | First two elements | Mixed negative/positive | Middle elements | Large gaps |
|------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 4 | +5% ⚡ | +16% ⚡ | +12% ⚡ | +10% ⚡ | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 5 | 0% 🔥 | +14% ⚡ | +4% 🔥 | 0% 🔥 | +50% ⚡ | +9% ⚡ | +8% ⚡ | +0% 🔥 |
| 🥉 | Solution 1 | +18% ⚡ | 0% 🔥 | +29% ⚡ | +18% ⚡ | +4% 🔥 | +13% ⚡ | +10% ⚡ | +5% ⚡ |
| 4 | Solution 2 | +15% ⚡ | +13% ⚡ | 0% 🔥 | +2% 🔥 | +20% ⚡ | +65% 📊 | +15% ⚡ | +15% ⚡ |
| 5 | Solution 3 | +54% 📊 | +32% ⚡ | +22% ⚡ | +25% ⚡ | +20% ⚡ | +49% ⚡ | +54% 📊 | +104% 📊 |
| 6 | Solution 6 | +41% ⚡ | +18% ⚡ | +75% 📊 | +163% 📊 | +48% ⚡ | +108% 📊 | +88% 📊 | +51% 📊 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Two Pointers - Basic approach**

The most straightforward solution for a sorted array:
- Start with two pointers: one at the beginning (`left`), one at the end (`right`)
- Calculate sum of elements at both pointers
- If sum equals target, return indices (1-indexed)
- If sum is too small, move left pointer right (increase sum)
- If sum is too large, move right pointer left (decrease sum)

**Time:** O(n) - single pass  
**Space:** O(1) - only two pointers


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Based on Solution 1** - Cache array values

**Changes:**
- Cache `numbers[left]` and `numbers[right]` to avoid repeated array access
- Each iteration accesses array twice instead of multiple times
- Reduces memory dereference overhead

**Expected gain:** ~5-10% (micro-optimization)


### Solution 3 — [`solution-3.ts`](./solution-3.ts)

**Based on Solution 2** - Eliminate intermediate sum variable

**Changes:**
- Removed `sum` variable, compare `leftVal + rightVal` directly inline
- One less variable allocation per iteration
- Slightly less memory pressure

**Expected gain:** ~3-5% (micro-optimization)


### Solution 4 — [`solution-4.ts`](./solution-4.ts)

**Based on Solution 2** - Eliminate destructuring overhead

**Changes:**
- Removed `const { numbers, target } = input;` destructuring
- Access `input.numbers` and `input.target` directly
- One less object destructuring operation
- Slightly less memory allocation at function start

**Expected gain:** ~5-8% (reduce function setup cost)


### Solution 5 — [`solution-5.ts`](./solution-5.ts)

**Based on Solution 2** - Ternary for pointer update

**Changes:**
- Replaced `else if` with ternary operator for pointer update
- Single-line conditional update reduces branching
- More compact, potentially better instruction cache

**Hypothesis:** Ternary might be optimized better by JIT compiler


### Solution 6 — [`solution-6.ts`](./solution-6.ts)

**Binary Search approach** - Different algorithm

**Changes:**
- For each element, binary search for the complement
- O(n log n) complexity vs O(n) for two pointers
- Better cache locality for very large arrays (theory)

**Hypothesis:** Will likely be slower, but testing algorithmic approach


## 📊 Conclusion

**Winner:** Solution 4 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0000ms average
- **Difference:** 69.9% slower

---

*Generated automatically by benchmarking suite*
