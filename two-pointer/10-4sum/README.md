# 10 4sum

**Last Updated:** Nov 4, 2025, 6:44 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 4/4 | 0.0232ms |
| Solution 2 | ✅ Pass | 4/4 | 0.0314ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000163ms | 0.000300ms | 0.000000ms | 0.954300ms | - |
| 🥈 | Solution 2 | 0.000262ms | 0.000700ms | 0.000100ms | 1.045700ms | +60.92% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 (all same) | Large numbers overflow | Negative target |
|------|----------|----------|----------|----------|----------|
| 🥇 | Solution 1 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 2 | +110% 📊 | +46% ⚡ | +26% ⚡ | +87% 📊 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Two Pointers - Nested Loops**

**O Problema:**
Encontrar 4 números que somam target. Extensão do 3Sum, mas mais complexo.

**Estratégia:**
1. Ordena o array
2. Dois loops externos (i, j) fixam os dois primeiros números
3. Two pointers (left, right) para os dois últimos números
4. Soma = nums[i] + nums[j] + nums[left] + nums[right]
5. Se soma < target: left++
6. Se soma > target: right--
7. Se soma == target: adiciona quádrupla e pula duplicatas

**Complexidade:** O(n³) tempo, O(1) espaço (ou O(n) se contar ordenação)


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Recursive kSum - Generalization**

Abordagem recursiva que generaliza para kSum.
Reduz o problema: 4Sum → 3Sum → 2Sum (two pointers).

**Complexidade:** O(n³) tempo, O(k) espaço (recursão)


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0002ms average
- **Slowest:** 0.0003ms average
- **Difference:** 60.9% slower

---

*Generated automatically by benchmarking suite*
