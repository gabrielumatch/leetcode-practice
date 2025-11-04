# 4 Quick Sort

**Last Updated:** Nov 4, 2025, 5:30 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 5/5 | 0.0307ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000120ms | 0.000700ms | 0.000000ms | 1.348000ms | - |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Single element | All same | Reverse order |
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

**Quick Sort - Versão Simples e Explicada**

Quick Sort é um algoritmo de ordenação "dividir para conquistar" muito eficiente!

**É dividir e conquistar? SIM! Mas funciona diferente do Merge Sort:**

**Merge Sort (divide primeiro, depois resolve):**
1. DIVIDE: Divide o array ao meio até ficar com arrays de 1 elemento
2. CONQUISTA: Junta (merge) os arrays ordenados de volta
3. O trabalho pesado (ordenar) acontece na hora de JUNTAR

**Quick Sort (resolve primeiro, depois divide):**
1. CONQUISTA PRIMEIRO: Particiona o array (coloca pivô no lugar certo)
2. DEPOIS DIVIDE: Divide em duas partes (esquerda e direita do pivô)
3. O trabalho pesado (ordenar) acontece ANTES de dividir (particionamento)

**Ambos são "dividir e conquistar" porque:**
- ✅ Dividem o problema em subproblemas menores
- ✅ Resolvem os subproblemas recursivamente
- ✅ Combinam as soluções (Quick Sort: pivô já está no lugar certo após particionar)

**Como funciona:**
1. Escolhe um elemento como "pivô" (geralmente o último)
2. Particiona o array: coloca elementos menores que o pivô à esquerda e maiores à direita
3. O pivô fica na posição correta!
4. Repete recursivamente para as duas partes (esquerda e direita do pivô)
5. Continua até cada parte ter apenas 1 elemento (já ordenado!)

**Exemplo passo a passo:**
Array inicial: [10, 7, 8, 9, 1, 5]

**Passo 1 - Particionar todo o array:**
- Pivô: 5 (último elemento)
- Menores que 5: [1]
- Maiores que 5: [10, 7, 8, 9]
- Resultado: [1, 5, 10, 7, 8, 9] ✓ 5 está na posição correta!

**Passo 2 - Particionar parte esquerda [1]:**
- Apenas 1 elemento → já está ordenado! ✓

**Passo 3 - Particionar parte direita [10, 7, 8, 9]:**
- Pivô: 9 (último elemento)
- Menores que 9: [7, 8]
- Maiores que 9: [10]
- Resultado: [7, 8, 9, 10] ✓ 9 está na posição correta!

**Passo 4 - Particionar [7, 8]:**
- Pivô: 8
- Menores que 8: [7]
- Maiores que 8: [] (vazio)
- Resultado: [7, 8] ✓

**Passo 5 - Particionar [10]:**
- Apenas 1 elemento → já está ordenado! ✓

**Resultado final:** [1, 5, 7, 8, 9, 10] ✓ Pronto! Ordenado!

**Entendendo os parâmetros 'left' e 'right':**
- 'left' e 'right' são ÍNDICES do array, não valores!
- 'left' = índice inicial (parte esquerda) da parte que queremos ordenar
- 'right' = índice final (parte direita) da parte que queremos ordenar
- Na primeira chamada: left=0, right=arr.length-1 (ordena todo o array)
- Nas chamadas recursivas: left e right mudam conforme dividimos o array

**Exemplo visual:**
Array: [10, 7, 8, 9, 1, 5]
Índices:  0   1  2  3  4  5

1ª chamada: quickSortRecursive(arr, 0, 5)
   → Ordena do índice 0 até 5 (todo o array)
   → Após particionar: pivô fica no índice 1

2ª chamada: quickSortRecursive(arr, 0, 0)
   → Ordena parte esquerda: índice 0 até 0 (apenas 1 elemento, já ordenado!)

3ª chamada: quickSortRecursive(arr, 2, 5)
   → Ordena parte direita: índice 2 até 5 ([8, 9, 1, 5])
   → E assim por diante...

**Como funciona o particionamento:**
Array: [10, 7, 8, 9, 1, 5], Pivô: 5 (arr[right])

1. Inicializa: i = -1 (índice do último elemento menor que o pivô)
2. Percorre de left até right-1 (antes do pivô):
   - j=0: 10 > 5 → não faz nada
   - j=1: 7 > 5 → não faz nada
   - j=2: 8 > 5 → não faz nada
   - j=3: 9 > 5 → não faz nada
   - j=4: 1 < 5 → i++, troca arr[i] com arr[j] → [1, 7, 8, 9, 10, 5]
3. Troca pivô com arr[i+1] → [1, 5, 7, 8, 9, 10] ✓

**Complexidade de Tempo:**
- **Melhor caso**: O(n log n) - quando o pivô sempre divide ao meio
- **Caso médio**: O(n log n) - para arrays aleatórios
- **Pior caso**: O(n²) - quando o pivô sempre é o menor ou maior elemento

**Por quê?**
- Melhor caso: altura da árvore = log n, cada nível faz n operações = O(n log n)
- Pior caso: array já ordenado ou inverso → altura = n, cada nível faz n operações = O(n²)
- Exemplo: [1,2,3,4,5] → pivô sempre o último → n-1, n-2, ... = O(n²)

**Complexidade de Espaço:**
- **Melhor caso**: O(log n) - altura da pilha de recursão
- **Pior caso**: O(n) - quando a árvore de recursão fica desbalanceada
- **Otimização**: Usar versão iterativa ou escolher pivô melhor para reduzir espaço

**Quick Sort vs Outros Algoritmos:**

📊 **Quick Sort - Vantagens:**
- ✅ **Rápido**: O(n log n) no caso médio, muito eficiente na prática
- ✅ **In-place**: Ordena no próprio array, usa pouco espaço extra
- ✅ **Cache-friendly**: Acesso sequencial à memória, bom para CPU cache
- ✅ **Versátil**: Funciona bem para diferentes tipos de dados

📊 **Quick Sort - Desvantagens:**
- ❌ **Não estável**: Pode mudar ordem de elementos iguais
- ❌ **Pior caso O(n²)**: Se pivô sempre for extremo (mas raro com boas escolhas)
- ❌ **Recursivo**: Usa pilha de chamadas (pode estourar para arrays muito grandes)

**Quando usar?**
- Arrays grandes e aleatórios
- Quando performance é importante
- Quando estabilidade não é necessária
- Arrays gerais (não específicos como quase ordenados)

**Otimizações comuns:**
- Escolher pivô aleatório (evita pior caso)
- Usar mediana de 3 elementos como pivô
- Para subarrays pequenos, usar Insertion Sort (hibridização)
- Versão iterativa para evitar stack overflow


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0001ms average
- **Slowest:** 0.0001ms average
- **Difference:** 0.0% slower

---

*Generated automatically by benchmarking suite*
