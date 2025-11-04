# 9 Sort Colors

**Last Updated:** Nov 4, 2025, 6:30 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 4/4 | 0.0157ms |
| Solution 2 | ✅ Pass | 4/4 | 0.0074ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 2 | 0.000061ms | 0.000200ms | 0.000000ms | 0.996200ms | - |
| 🥈 | Solution 1 | 0.000070ms | 0.000300ms | 0.000000ms | 1.201300ms | +15.86% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Single element | Multiple of each |
|------|----------|----------|----------|----------|----------|
| 🥇 | Solution 2 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 1 | +6% ⚡ | +16% ⚡ | +36% ⚡ | +60% 📊 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Dutch National Flag - Two Pointers**

**O Problema:**
Array tem apenas 0s, 1s e 2s. Ordenar in-place: todos 0s, depois 1s, depois 2s.

**Estratégia:**
Três ponteiros: left (onde colocar 0s), right (onde colocar 2s), current (iterador).
- Se nums[current] == 0: troca com left, left++, current++
- Se nums[current] == 1: current++ (já está no lugar)
- Se nums[current] == 2: troca com right, right-- (não incrementa current!)

**Complexidade:** O(n) tempo, O(1) espaço


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Counting Sort - Count and Fill**

Conta quantos 0s, 1s e 2s existem.
Depois preenche o array: primeiro todos 0s, depois 1s, depois 2s.

**Complexidade:** O(n) tempo, O(1) espaço (usa apenas 3 contadores)


## 📊 Conclusion

**Winner:** Solution 2 🥇

- **Fastest:** 0.0001ms average
- **Slowest:** 0.0001ms average
- **Difference:** 15.9% slower

---

*Generated automatically by benchmarking suite*
