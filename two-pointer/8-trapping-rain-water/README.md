# 8 Trapping Rain Water

**Last Updated:** Nov 4, 2025, 6:29 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 4/4 | 0.0059ms |
| Solution 2 | ✅ Pass | 4/4 | 0.0098ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000045ms | 0.000100ms | 0.000000ms | 1.223300ms | - |
| 🥈 | Solution 2 | 0.000096ms | 0.000200ms | 0.000000ms | 1.028700ms | +114.64% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Multiple valleys | Descending (no water) |
|------|----------|----------|----------|----------|----------|
| 🥇 | Solution 1 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 2 | +110% 📊 | +127% 📊 | +103% 📊 | +64% 📊 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Two Pointers - Greedy**

**O Problema:**
Imagine barras de diferentes alturas. A água fica "presa" entre as barras.
A água em cada posição é limitada pela MENOR barra mais alta dos dois lados.

**Exemplo Visual:**
Array: [0,1,0,2,1,0,1,3,2,1,2,1]

Representação (água = X):
         X
    X    XX X
_X_XX_X_XXXXXX
0 1 0 2 1 0 1 3 2 1 2 1

Água na posição i = min(maior à esquerda, maior à direita) - height[i]
Se negativo, não tem água.

**A Solução:**
1. Dois ponteiros: left e right nas extremidades
2. Mantém maxLeft e maxRight (maiores barras encontradas)
3. Move o ponteiro da menor altura (greedy)
4. Calcula água: min(maxLeft, maxRight) - height[atual]

**Complexidade:** O(n) tempo, O(1) espaço


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Pre-compute Max Heights**

Calcula maxLeft e maxRight para cada posição ANTES.
Depois calcula água: min(maxLeft[i], maxRight[i]) - height[i]

**Complexidade:** O(n) tempo, O(n) espaço


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0001ms average
- **Difference:** 114.6% slower

---

*Generated automatically by benchmarking suite*
