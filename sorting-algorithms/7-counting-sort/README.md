# 7 Counting Sort

**Last Updated:** Nov 4, 2025, 5:30 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 5/5 | 0.0146ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000100ms | 0.000300ms | 0.000000ms | 1.376400ms | - |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Single element | All same | Already sorted |
|------|----------|----------|----------|----------|----------|----------|
| 🥇 | Solution 1 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 | 0% 🔥 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Counting Sort - Versão Simples e Explicada**

Counting Sort é um algoritmo de ordenação que NÃO compara elementos! É super rápido quando o range de valores é pequeno.

**Como funciona:**
1. Conta quantas vezes cada valor aparece no array
2. Usa essas contagens para determinar a posição de cada elemento
3. Coloca cada elemento na posição correta
4. Funciona sem comparações entre elementos!

**Exemplo passo a passo:**
Array inicial: [4, 2, 2, 8, 3, 3, 1]
Range: 1 a 8 (valores entre 0 e 8)

**Passo 1 - Contar frequências:**
Percorre o array e conta quantas vezes cada número aparece:
- 1 aparece 1 vez
- 2 aparece 2 vezes
- 3 aparece 2 vezes
- 4 aparece 1 vez
- 8 aparece 1 vez

Array de contagem: [0, 1, 2, 2, 1, 0, 0, 0, 1]
Índices:            [0, 1, 2, 3, 4, 5, 6, 7, 8]

**Passo 2 - Calcular posições acumuladas:**
Transforma contagens em posições finais:
- Índice 0: 0 elementos antes → primeira posição para 0 seria 0
- Índice 1: 0 elementos antes → primeira posição para 1 seria 0
- Índice 2: 1 elemento antes → primeira posição para 2 seria 1
- Índice 3: 1+2=3 elementos antes → primeira posição para 3 seria 3
- Índice 4: 1+2+2=5 elementos antes → primeira posição para 4 seria 5
- Índice 8: 1+2+2+1=6 elementos antes → primeira posição para 8 seria 6

Array de posições: [0, 0, 1, 3, 5, 5, 5, 5, 6]

**Passo 3 - Colocar elementos nas posições corretas:**
Percorre o array original de trás para frente:
- Elemento 1: posição 0 → [1, _, _, _, _, _, _]
- Elemento 3: posição 3 → [1, _, _, 3, _, _, _]
- Elemento 3: posição 4 → [1, _, _, 3, 3, _, _]
- Elemento 2: posição 1 → [1, 2, _, 3, 3, _, _]
- Elemento 2: posição 2 → [1, 2, 2, 3, 3, _, _]
- Elemento 4: posição 5 → [1, 2, 2, 3, 3, 4, _]
- Elemento 8: posição 6 → [1, 2, 2, 3, 3, 4, 8] ✓ Pronto! Ordenado!

**Por que de trás para frente?**
- Para manter a estabilidade (ordem de elementos iguais)
- O último elemento 3 vai para a última posição disponível para 3
- Garante que elementos iguais mantêm a ordem original

**Complexidade de Tempo:**
- **Melhor caso**: O(n + k) - onde k é o range de valores
- **Caso médio**: O(n + k) - sempre faz n + k operações
- **Pior caso**: O(n + k) - sempre faz n + k operações

**Por quê O(n + k)?**
- Contar frequências: O(n) - percorre o array uma vez
- Calcular posições: O(k) - percorre o array de contagem
- Colocar elementos: O(n) - percorre o array original novamente
- Total: O(n) + O(k) + O(n) = O(n + k)
- Exemplo: array com 100 elementos, range 0-9 → O(100 + 10) = O(110)

**Complexidade de Espaço:**
- **O(k)** - precisa de array de contagem com k elementos
- Onde k é o range (max - min + 1)
- Exemplo: valores de 0 a 9 → k = 10

**Counting Sort vs Outros Algoritmos:**

📊 **Counting Sort - Vantagens:**
- ✅ **Muito rápido**: O(n + k) quando k é pequeno
- ✅ **Sem comparações**: Não compara elementos entre si
- ✅ **Estável**: Mantém a ordem de elementos iguais
- ✅ **Linear**: Pode ser mais rápido que O(n log n) quando k << n

📊 **Counting Sort - Desvantagens:**
- ❌ **Range limitado**: Só funciona quando k (range) é pequeno
- ❌ **Espaço extra**: Precisa de O(k) espaço para contagem
- ❌ **Apenas inteiros**: Não funciona bem com números decimais ou strings
- ❌ **Ineficiente para k grande**: Se k ≈ n², pode ser pior que O(n log n)

**Quando usar?**
- Quando o range de valores é pequeno (ex: 0-100)
- Para ordenar inteiros não negativos
- Quando você precisa de O(n) garantido
- Como parte de algoritmos mais complexos (ex: Radix Sort)

**Exemplos práticos:**
- Idades de pessoas (0-150)
- Notas de provas (0-100)
- Contagem de caracteres (a-z: 26 valores)
- Códigos de produtos limitados


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0001ms average
- **Slowest:** 0.0001ms average
- **Difference:** 0.0% slower

---

*Generated automatically by benchmarking suite*
