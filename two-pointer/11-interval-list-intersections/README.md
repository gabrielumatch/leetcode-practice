# 11 Interval List Intersections

**Last Updated:** Nov 4, 2025, 6:44 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 4/4 | 0.0155ms |
| Solution 2 | ✅ Pass | 4/4 | 0.0110ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000044ms | 0.000300ms | 0.000000ms | 0.937800ms | - |
| 🥈 | Solution 2 | 0.000052ms | 0.000300ms | 0.000000ms | 0.866800ms | +18.43% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Empty second list | Empty first list | Single interval overlap |
|------|----------|----------|----------|----------|----------|
| 🥇 | Solution 1 | 0% 🔥 | 0% 🔥 | +29% ⚡ | 0% 🔥 |
| 🥈 | Solution 2 | +19% ⚡ | +52% 📊 | 0% 🔥 | +13% ⚡ |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Two Pointers - Merge Intervals**

**O Problema:**
Encontrar todas as interseções entre duas listas de intervalos ordenados.

**Estratégia:**
1. Dois ponteiros (i, j) para percorrer as duas listas
2. Para cada par de intervalos, calcula a interseção:
   - start = max(interval1.start, interval2.start)
   - end = min(interval1.end, interval2.end)
   - Se start <= end: há interseção!
3. Move o ponteiro do intervalo que termina primeiro
4. Por quê? O intervalo que termina antes não pode mais ter interseções

**Exemplo:**
firstList = [[0, 2], [5, 10]]
secondList = [[1, 5], [8, 12]]

i=0, j=0: [0,2] vs [1,5]
  - interseção: [max(0,1), min(2,5)] = [1, 2] ✓
  - [0,2] termina antes → i++

i=1, j=0: [5,10] vs [1,5]
  - interseção: [max(5,1), min(10,5)] = [5, 5] ✓
  - [1,5] termina antes → j++

i=1, j=1: [5,10] vs [8,12]
  - interseção: [max(5,8), min(10,12)] = [8, 10] ✓
  - [5,10] termina antes → i++

Resultado: [[1,2], [5,5], [8,10]]

**Complexidade:** O(n + m) tempo, O(1) espaço (sem contar resultado)


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Brute Force - All Pairs**

Compara TODOS os intervalos da primeira lista com TODOS da segunda.
Simples mas ineficiente para listas grandes.

**Complexidade:** O(n × m) tempo, O(1) espaço (sem contar resultado)


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0001ms average
- **Difference:** 18.4% slower

---

*Generated automatically by benchmarking suite*
