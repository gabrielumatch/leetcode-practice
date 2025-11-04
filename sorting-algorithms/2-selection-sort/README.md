# 2 Selection Sort

**Last Updated:** Nov 4, 2025, 5:27 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 5/5 | 0.0109ms |
| Solution 2 | ✅ Pass | 5/5 | 0.9624ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000046ms | 0.000100ms | 0.000000ms | 0.936100ms | - |
| 🥈 | Solution 2 | 0.000078ms | 0.001000ms | 0.000000ms | 9.551800ms | +68.05% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | With duplicates | Single element | Reverse order |
|------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 1 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 2 | +205% 🐌 | +257% 🐌 | +169% 📊 | +15% ⚡ | +129% 📊 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Selection Sort - Versão Simples e Explicada**

Selection Sort é um algoritmo de ordenação intuitivo e fácil de entender.

**Como funciona:**
1. Encontra o menor elemento na parte não ordenada do array
2. Troca ele com o primeiro elemento da parte não ordenada
3. Agora a primeira posição está correta! Avança para a próxima
4. Repete até ordenar tudo

**Exemplo passo a passo:**
Array inicial: [64, 25, 12, 22, 11]

Passada 1 (posição 0):
- Parte não ordenada: [64, 25, 12, 22, 11]
- Menor elemento: 11 (índice 4)
- Troca 64 com 11 → [11, 25, 12, 22, 64] ✓ Posição 0 correta!

Passada 2 (posição 1):
- Parte não ordenada: [25, 12, 22, 64]
- Menor elemento: 12 (índice 2)
- Troca 25 com 12 → [11, 12, 25, 22, 64] ✓ Posição 1 correta!

Passada 3 (posição 2):
- Parte não ordenada: [25, 22, 64]
- Menor elemento: 22 (índice 3)
- Troca 25 com 22 → [11, 12, 22, 25, 64] ✓ Posição 2 correta!

Passada 4 (posição 3):
- Parte não ordenada: [25, 64]
- Menor elemento: 25 (já está na posição certa)
- Não precisa trocar → [11, 12, 22, 25, 64] ✓ Pronto! Ordenado!

**Complexidade de Tempo:**
- **Pior caso**: O(n²) - quando o array está em ordem inversa
- **Melhor caso**: O(n²) - mesmo quando já está ordenado, ainda faz todas as comparações
- **Caso médio**: O(n²) - sempre faz o mesmo número de comparações

**Por quê O(n²)?**
- Loop externo: executa n-1 vezes (para cada posição)
- Loop interno: na posição i, compara (n-i-1) elementos
- Total de comparações: (n-1) + (n-2) + ... + 2 + 1 = n(n-1)/2 = O(n²)
- Exemplo: array com 5 elementos → 4 + 3 + 2 + 1 = 10 comparações

**Complexidade de Espaço:**
- **O(1)** - espaço extra constante
- Usa apenas variáveis auxiliares (minIndex, i, j)
- Não cria arrays ou estruturas extras (exceto a cópia do input, que é opcional)

**Selection Sort vs Bubble Sort - Quando usar cada um?**

📊 **Selection Sort - Vantagens:**
- ✅ **Menos trocas**: Faz no máximo n-1 trocas (sempre uma por posição)
- ✅ **Melhor para memória**: Quando escrever na memória é custoso (ex: discos, memória flash)
- ✅ **Previsível**: Sempre faz o mesmo número de operações, fácil de prever o tempo

📊 **Bubble Sort - Vantagens:**
- ✅ **Pode parar mais cedo**: Se o array já estiver ordenado, para na primeira passada
- ✅ **Estável**: Mantém a ordem de elementos iguais (importante para objetos)
- ✅ **Adaptativo**: Funciona bem com arrays quase ordenados

**Exemplo prático:**
Array: [64, 25, 12, 22, 11]

**Bubble Sort:**
- Faz muitas comparações E muitas trocas
- Pode fazer 3-4 trocas na primeira passada só para mover o 64
- Total: ~20 comparações + ~10 trocas

**Selection Sort:**
- Faz muitas comparações MAS poucas trocas
- Encontra o menor (11 comparações), depois troca apenas 1 vez
- Total: ~20 comparações + apenas 4 trocas

**Resumo:**
- Use **Selection Sort** quando: trocar é caro (memória lenta), você quer poucas trocas
- Use **Bubble Sort** quando: o array pode já estar ordenado, você precisa de estabilidade


### Solution 2 — [`solution-2.ts`](./solution-2.ts)




## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0001ms average
- **Difference:** 68.0% slower

---

*Generated automatically by benchmarking suite*
