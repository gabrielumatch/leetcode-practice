# 4 Remove Duplicates From Sorted Array

**Last Updated:** Nov 4, 2025, 6:06 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 4/4 | 0.0081ms |
| Solution 2 | ✅ Pass | 4/4 | 0.0074ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000058ms | 0.000200ms | 0.000000ms | 1.452300ms | - |
| 🥈 | Solution 2 | 0.000120ms | 0.000600ms | 0.000000ms | 1.412900ms | +107.27% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Single element | All duplicates |
|------|----------|----------|----------|----------|----------|
| 🥇 | Solution 1 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 2 | +39% ⚡ | +138% 📊 | +161% 📊 | +214% 🐌 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Remove Duplicates from Sorted Array - Versão Simples e Explicada**

Remove duplicatas de um array ordenado, mantendo apenas os elementos únicos no início.

**Como funciona:**
1. Usa dois ponteiros: "slow" (escreve) e "fast" (lê)
2. O ponteiro slow marca onde colocar o próximo elemento único
3. O ponteiro fast percorre o array procurando novos elementos
4. Quando encontra um elemento diferente, copia para a posição slow
5. Como o array está ordenado, duplicatas estão sempre juntas!

**Exemplo passo a passo:**
Array: [1, 1, 2, 2, 3]

Passo 1: slow=0, fast=1
- nums[1] = 1 é igual a nums[0] = 1 → duplicata, skip

Passo 2: slow=0, fast=2
- nums[2] = 2 é diferente de nums[0] = 1 → novo único!
- slow++ → slow=1
- nums[1] = nums[2] → [1, 2, 2, 2, 3]

Passo 3: slow=1, fast=3
- nums[3] = 2 é igual a nums[1] = 2 → duplicata, skip

Passo 4: slow=1, fast=4
- nums[4] = 3 é diferente de nums[1] = 2 → novo único!
- slow++ → slow=2
- nums[2] = nums[4] → [1, 2, 3, 2, 3]

Resultado: Retorna 3 (primeiros 3 elementos são únicos: [1, 2, 3])

**Complexidade:**
- Tempo: O(n) - percorre o array uma vez
- Espaço: O(1) - usa apenas variáveis auxiliares


### Solution 2 — [`solution-2.ts`](./solution-2.ts)
No description provided

## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0001ms average
- **Slowest:** 0.0001ms average
- **Difference:** 107.3% slower

---

*Generated automatically by benchmarking suite*
