# 6 Heap Sort

**Last Updated:** Nov 4, 2025, 5:30 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 5/5 | 0.0178ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000112ms | 0.000500ms | 0.000000ms | 1.677900ms | - |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Single element | Example 3 | Reverse order |
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

**Heap Sort - Versão Simples e Explicada**

Heap Sort usa uma estrutura de dados chamada "Heap" (pilha binária) para ordenar!

**O que é um Heap?**
- Uma árvore binária completa onde cada pai é maior que seus filhos (Max Heap)
- Ou cada pai é menor que seus filhos (Min Heap)
- Para ordenação crescente, usamos Max Heap

**Heap e Balanceamento de Árvore Binária - A Conexão:**
Sim! Heap Sort tem muito a ver com balanceamento de árvore binária:

**Similaridades:**
- ✅ **Estrutura de árvore**: Heap é uma árvore binária completa
- ✅ **Propriedade de ordenação**: Como BST, mantém uma propriedade de ordenação
- ✅ **Operação de reorganização**: Heapify é similar a rotações em AVL/Red-Black
- ✅ **Manutenção de invariantes**: Ambos mantêm propriedades que garantem eficiência

**Diferenças:**
- **BST/AVL**: Ordena por valor (esquerda < raiz < direita)
- **Heap**: Ordena por hierarquia (pai >= filhos OU pai <= filhos)
- **BST**: Busca em O(log n), mas pode desbalancear
- **Heap**: Sempre balanceado (árvore completa), mas não serve para busca

**Heapify = Balanceamento?**
- Heapify mantém a propriedade do heap (pai >= filhos)
- Similar a rotações em AVL que mantêm altura balanceada
- Ambos "corrigem" a estrutura quando ela viola as propriedades
- Ambos garantem O(log n) para operações principais

**Como funciona:**
1. Constrói um Max Heap a partir do array (pai >= filhos)
2. O maior elemento está sempre na raiz (índice 0)
3. Troca a raiz com o último elemento e "remove" do heap
4. Reorganiza o heap (heapify) para manter a propriedade
5. Repete até ordenar todos os elementos

**Exemplo passo a passo:**
Array inicial: [12, 11, 13, 5, 6, 7]

**Passo 1 - Construir Max Heap:**
Array: [12, 11, 13, 5, 6, 7]
Representação como árvore:
        12
       /  \
      11   13
     / \  /
    5  6 7

Heapify de baixo para cima:
- Índice 2 (13): já está ok (13 > 7)
- Índice 1 (11): já está ok (11 > 5, 11 > 6)
- Índice 0 (12): precisa trocar com 13 → [13, 11, 12, 5, 6, 7]

Max Heap construído:
        13
       /  \
      11   12
     / \  /
    5  6 7
Array: [13, 11, 12, 5, 6, 7] ✓

**Passo 2 - Ordenar:**
1. Troca raiz (13) com último (7) → [7, 11, 12, 5, 6, 13] ✓ 13 no lugar certo!
2. Heapify [7, 11, 12, 5, 6] → [12, 11, 7, 5, 6] ✓

3. Troca raiz (12) com último (6) → [6, 11, 7, 5, 12, 13] ✓ 12 no lugar certo!
4. Heapify [6, 11, 7, 5] → [11, 6, 7, 5] → [11, 6, 7, 5] ✓

5. Troca raiz (11) com último (5) → [5, 6, 7, 11, 12, 13] ✓ 11 no lugar certo!
6. Heapify [5, 6, 7] → [7, 6, 5] ✓

7. Troca raiz (7) com último (5) → [5, 6, 7, 11, 12, 13] ✓ 7 no lugar certo!
8. Heapify [5, 6] → [6, 5] ✓

9. Troca raiz (6) com último (5) → [5, 6, 7, 11, 12, 13] ✓ Pronto! Ordenado!

**Como funciona o Heapify (similar ao balanceamento):**
Para um nó no índice i, seus filhos estão em:
- Filho esquerdo: 2*i + 1
- Filho direito: 2*i + 2

Heapify garante que o nó seja maior que seus filhos (mantém a propriedade do heap):
1. Encontra o maior entre pai e filhos
2. Se o maior não é o pai, troca (similar a rotação em AVL)
3. Repete recursivamente no nó trocado (propaga a correção)

**Analogia com Balanceamento:**
- **AVL Tree**: Rotação quando altura difere em mais de 1
- **Heap**: Heapify quando pai < filho (viola propriedade Max Heap)
- Ambos "corrigem" a estrutura para manter propriedades
- Ambos garantem eficiência O(log n)

**Complexidade de Tempo:**
- **Melhor caso**: O(n log n) - sempre precisa construir heap e ordenar
- **Caso médio**: O(n log n) - sempre precisa construir heap e ordenar
- **Pior caso**: O(n log n) - sempre precisa construir heap e ordenar (garantido!)

**Por quê O(n log n)?**
- Construir heap: O(n) - parece estranho, mas é O(n)!
- Extrair n elementos: O(n log n) - cada extração é O(log n)
- Total: O(n) + O(n log n) = O(n log n)
- Exemplo: array com 8 elementos → construir heap: ~8 operações, extrair: 8 × log(8) = 24

**Complexidade de Espaço:**
- **O(1)** - ordena in-place, usa apenas variáveis auxiliares
- Não precisa de arrays ou estruturas extras

**Heap Sort vs Outros Algoritmos:**

📊 **Heap Sort - Vantagens:**
- ✅ **Garantido O(n log n)**: Sempre eficiente, não importa o input
- ✅ **In-place**: Ordena no próprio array, usa O(1) espaço extra
- ✅ **Não recursivo**: Não usa pilha de chamadas (pode ser implementado iterativamente)
- ✅ **Previsível**: Performance consistente

📊 **Heap Sort - Desvantagens:**
- ❌ **Não estável**: Pode mudar ordem de elementos iguais
- ❌ **Mais lento que Quick Sort**: Na prática, constantes maiores
- ❌ **Não adaptativo**: Não se beneficia de arrays parcialmente ordenados
- ❌ **Cache-unfriendly**: Acesso não sequencial à memória

**Quando usar?**
- Quando você precisa de garantia de O(n log n) e espaço O(1)
- Para sistemas embarcados (sem espaço para Merge Sort)
- Quando você precisa do maior/menor elemento rapidamente
- Para implementar filas de prioridade


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0001ms average
- **Slowest:** 0.0001ms average
- **Difference:** 0.0% slower

---

*Generated automatically by benchmarking suite*
