# 2 Two Sum Ii

**Last Updated:** Nov 4, 2025, 12:21 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0035ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0028ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0039ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0024ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0023ms |
| Solution 6 | ✅ Pass | 8/8 | 0.0048ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 3 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0130ms | - |
| 🥈 | Solution 4 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0074ms | +10.0% |
| 🥉 | Solution 5 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0063ms | +14.1% |
| 4 | Solution 1 | 0.0000ms | 0.0001ms | 0.0000ms | 1.4033ms | +20.4% |
| 5 | Solution 2 | 0.0000ms | 0.0001ms | 0.0000ms | 0.1905ms | +28.0% |
| 6 | Solution 6 | 0.0000ms | 0.0001ms | 0.0000ms | 0.7376ms | +107.8% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers)
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Example 3 (negative) | Last two elements | First two elements | Mixed negative/positive | Middle elements | Large gaps |
|------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 3 | 0% 🔥 | 0% 🔥 | +38% ⚡ | +30% ⚡ | +3% 🔥 | 0% 🔥 | 0% 🔥 | +9% ⚡ |
| 🥈 | Solution 4 | +5% ⚡ | +4% 🔥 | 0% 🔥 | 0% 🔥 | +46% ⚡ | +30% ⚡ | +13% ⚡ | 0% 🔥 |
| 🥉 | Solution 5 | +23% ⚡ | +10% ⚡ | +28% ⚡ | +30% ⚡ | 0% 🔥 | +7% ⚡ | +4% 🔥 | +71% 📊 |
| 4 | Solution 1 | +38% ⚡ | +14% ⚡ | +50% ⚡ | +102% 📊 | +9% ⚡ | +41% ⚡ | +18% ⚡ | +58% 📊 |
| 5 | Solution 2 | +24% ⚡ | +9% ⚡ | +13% ⚡ | +3% 🔥 | +50% 📊 | +45% ⚡ | +37% ⚡ | +61% 📊 |
| 6 | Solution 6 | +33% ⚡ | +40% ⚡ | +30% ⚡ | +258% 🐌 | +107% 📊 | +110% 📊 | +94% 📊 | +107% 📊 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 10000 iterations per test case (all solutions face same conditions)
- Comparisons use **trimmed mean** (95% best runs, removes outliers)
- This eliminates GC pauses, cache effects, and context switch noise


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

**Winner:** Solution 3 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0000ms average
- **Difference:** 107.8% slower

---

*Generated automatically by benchmarking suite*
