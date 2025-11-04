# 6 Container With Most Water

**Last Updated:** Nov 4, 2025, 6:20 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 4/4 | 0.0131ms |
| Solution 2 | ✅ Pass | 4/4 | 0.0073ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000041ms | 0.000100ms | 0.000000ms | 0.025200ms | - |
| 🥈 | Solution 2 | 0.000051ms | 0.000200ms | 0.000000ms | 1.116400ms | +25.38% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 (minimum) | Edge values | Small array |
|------|----------|----------|----------|----------|----------|
| 🥇 | Solution 1 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 2 | +64% 📊 | +18% ⚡ | +25% ⚡ | +3% 🔥 |

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
Imagine barras verticais em posições diferentes. Entre 2 barras, a água forma um retângulo.
A água NÃO pode transbordar - é limitada pela MENOR barra.

**Exemplo:**
Barras em índices 1 (altura 8) e 8 (altura 7):
- Largura = 8 - 1 = 7
- Altura da água = min(8, 7) = 7 (limitada pela menor!)
- Área = 7 × 7 = 49

**A Solução:**
1. Dois ponteiros nas extremidades (left=0, right=n-1)
2. Calcula área: min(height[left], height[right]) × (right - left)
3. Move o ponteiro da MENOR altura (greedy)
4. Por quê? Se mover o maior, a área não aumenta (limitada pela menor)

**Complexidade:** O(n) tempo, O(1) espaço


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Brute Force - Nested Loops**

Testa TODOS os pares possíveis de barras e encontra a maior área.
Mais simples de entender, mas muito menos eficiente.

**Complexidade:** O(n²) tempo, O(1) espaço


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0001ms average
- **Difference:** 25.4% slower

---

*Generated automatically by benchmarking suite*
