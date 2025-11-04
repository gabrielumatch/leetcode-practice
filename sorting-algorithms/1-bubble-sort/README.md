# 1 Bubble Sort

**Last Updated:** Nov 4, 2025, 4:01 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 5/5 | 0.0241ms |
| Solution 2 | ✅ Pass | 5/5 | 0.5992ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 2 | 0.000039ms | 0.000100ms | 0.000000ms | 1.797900ms | - |
| 🥈 | Solution 1 | 0.000046ms | 0.000200ms | 0.000000ms | 1.272700ms | +17.95% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Single element | All same | Reverse order |
|------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 2 | +16% ⚡ | +43% ⚡ | +40% ⚡ | 0% 🔥 | +55% 📊 |
| 🥈 | Solution 1 | 0% 🔥 | 0% 🔥 | 0% 🔥 | +9% ⚡ | 0% 🔥 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Bubble Sort - Versão Simples e Explicada**

Bubble Sort é um dos algoritmos de ordenação mais simples de entender.

**Como funciona:**
1. Compara elementos adjacentes (um ao lado do outro)
2. Se o da esquerda for maior que o da direita, troca eles
3. Repete isso passando por todo o array várias vezes
4. A cada "passada", o maior elemento "flutua" até o final (como uma bolha)
5. Continua até não fazer mais nenhuma troca

**Exemplo passo a passo:**
Array inicial: [64, 34, 25, 12]

Passada 1:
- Compara 64 e 34: 64 > 34 → troca → [34, 64, 25, 12]
- Compara 64 e 25: 64 > 25 → troca → [34, 25, 64, 12]
- Compara 64 e 12: 64 > 12 → troca → [34, 25, 12, 64] ✓ 64 já está no lugar certo!

Passada 2:
- Compara 34 e 25: 34 > 25 → troca → [25, 34, 12, 64]
- Compara 34 e 12: 34 > 12 → troca → [25, 12, 34, 64] ✓ 34 já está no lugar certo!

Passada 3:
- Compara 25 e 12: 25 > 12 → troca → [12, 25, 34, 64] ✓ Pronto! Ordenado!

**Complexidade:**
- Tempo: O(n²) - para arrays grandes é lento
- Espaço: O(1) - não usa espaço extra


### Solution 2 — [`solution-2.ts`](./solution-2.ts)




## 📊 Conclusion

**Winner:** Solution 2 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0000ms average
- **Difference:** 17.9% slower

---

*Generated automatically by benchmarking suite*
