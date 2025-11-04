# 2 Two Sum Ii

**Last Updated:** Nov 4, 2025, 12:16 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 8/8 | 0.0034ms |
| Solution 2 | ✅ Pass | 8/8 | 0.0024ms |
| Solution 3 | ✅ Pass | 8/8 | 0.0036ms |
| Solution 4 | ✅ Pass | 8/8 | 0.0021ms |
| Solution 5 | ✅ Pass | 8/8 | 0.0019ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 2 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0110ms | - |
| 🥈 | Solution 4 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0116ms | +2.7% |
| 🥉 | Solution 3 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0565ms | +3.9% |
| 4 | Solution 1 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0248ms | +14.4% |
| 5 | Solution 5 | 0.0000ms | 0.0001ms | 0.0000ms | 0.0058ms | +20.0% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers)
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Example 3 (negative) | Last two elements | First two elements | Mixed negative/positive | Middle elements | Large gaps |
|------|----------|----------|----------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 2 | +15% ⚡ | +4% 🔥 | +52% 📊 | +6% ⚡ | +7% ⚡ | +13% ⚡ | +8% ⚡ | 0% 🔥 |
| 🥈 | Solution 4 | 0% 🔥 | +25% ⚡ | +38% ⚡ | +9% ⚡ | 0% 🔥 | +10% ⚡ | +24% ⚡ | +41% ⚡ |
| 🥉 | Solution 3 | +29% ⚡ | +28% ⚡ | 0% 🔥 | +9% ⚡ | +2% 🔥 | +28% ⚡ | +3% 🔥 | +34% ⚡ |
| 4 | Solution 1 | +53% 📊 | 0% 🔥 | +42% ⚡ | +17% ⚡ | +15% ⚡ | +25% ⚡ | 0% 🔥 | +61% 📊 |
| 5 | Solution 5 | +7% ⚡ | +73% 📊 | +81% 📊 | 0% 🔥 | +1% 🔥 | 0% 🔥 | +6% ⚡ | +71% 📊 |

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

**Based on Solution 2** - Eliminate else-if branching

**Changes:**
- Replaced `else if` with early `continue` statements
- Reduces branch prediction complexity
- Slightly more explicit control flow

**Expected gain:** ~3-5% (simpler branching)


## 📊 Conclusion

**Winner:** Solution 2 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0000ms average
- **Difference:** 20.0% slower

---

*Generated automatically by benchmarking suite*
