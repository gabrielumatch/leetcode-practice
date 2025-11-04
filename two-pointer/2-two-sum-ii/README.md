# 2 Two Sum Ii

**Last Updated:** Nov 4, 2025, 12:20 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0044ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0029ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0045ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0028ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0029ms |
| Solution 6 | ✅ Pass | 8/8 | 0.0056ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0121ms | - |
| 🥈 | Solution 4 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0070ms | +5.2% |
| 🥉 | Solution 3 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0056ms | +10.2% |
| 4 | Solution 2 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0050ms | +13.9% |
| 5 | Solution 5 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0100ms | +17.6% |
| 6 | Solution 6 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0072ms | +85.9% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers)
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Example 3 (negative) | Last two elements | First two elements | Mixed negative/positive | Middle elements | Large gaps |
|------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 1 | +7% ⚡ | 0% 🔥 | +48% ⚡ | +28% ⚡ | 0% 🔥 | +22% ⚡ | +5% ⚡ | +39% ⚡ |
| 🥈 | Solution 4 | 0% 🔥 | +18% ⚡ | 0% 🔥 | 0% 🔥 | +37% ⚡ | +3% 🔥 | 0% 🔥 | +28% ⚡ |
| 🥉 | Solution 3 | +4% 🔥 | +20% ⚡ | +73% 📊 | +28% ⚡ | +30% ⚡ | +14% ⚡ | +31% ⚡ | +36% ⚡ |
| 4 | Solution 2 | +23% ⚡ | +25% ⚡ | +68% 📊 | +8% ⚡ | +30% ⚡ | 0% 🔥 | +1% 🔥 | 0% 🔥 |
| 5 | Solution 5 | +57% 📊 | +22% ⚡ | +98% 📊 | +24% ⚡ | +50% 📊 | +25% ⚡ | +28% ⚡ | +38% ⚡ |
| 6 | Solution 6 | +61% 📊 | +33% ⚡ | +63% 📊 | +207% 🐌 | +62% 📊 | +54% 📊 | +59% 📊 | +74% 📊 |

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

**Winner:** Solution 1 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0000ms average
- **Difference:** 85.9% slower

---

*Generated automatically by benchmarking suite*
