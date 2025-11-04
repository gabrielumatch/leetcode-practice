# 9 Shell Sort

**Last Updated:** Nov 4, 2025, 5:30 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 5/5 | 0.0112ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000067ms | 0.000200ms | 0.000000ms | 0.957100ms | - |

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

**Shell Sort - Versão Simples e Explicada**

Shell Sort é uma melhoria do Insertion Sort! Funciona como Insertion Sort, mas compara elementos que estão longe um do outro primeiro.

**Como funciona:**
1. Define uma sequência de "gaps" (espaços) entre elementos
2. Ordena elementos separados por esse gap usando Insertion Sort
3. Reduz o gap gradualmente
4. Quando gap = 1, funciona como Insertion Sort normal
5. Nesse ponto, o array já está quase ordenado, então é rápido!

**Exemplo passo a passo:**
Array inicial: [12, 34, 54, 2, 3]
Gap inicial: 5 / 2 = 2 (usando sequência de Knuth: gap = gap * 3 + 1, ou simplesmente n/2)

**Passo 1 - Gap = 2:**
Compara elementos separados por 2 posições:
- Índices 0 e 2: 12 vs 54 → 12 < 54 → ok
- Índices 1 e 3: 34 vs 2 → 34 > 2 → troca → [12, 2, 54, 34, 3]
- Índices 2 e 4: 54 vs 3 → 54 > 3 → troca → [12, 2, 3, 34, 54]

Array após gap=2: [12, 2, 3, 34, 54]

**Passo 2 - Gap = 1 (Insertion Sort normal):**
Agora o array já está quase ordenado!
- Índice 1: 2 vs 12 → 2 < 12 → troca → [2, 12, 3, 34, 54]
- Índice 2: 3 vs 12 → 3 < 12 → troca → [2, 3, 12, 34, 54]
- Resto já está ordenado

Resultado: [2, 3, 12, 34, 54] ✓ Pronto! Ordenado!

**Por que funciona?**
- Gap grande move elementos grandes mais rápido para a direita
- Gap pequeno faz ajustes finos
- Quando gap = 1, array já está quase ordenado → Insertion Sort é rápido!

**Complexidade de Tempo:**
- **Melhor caso**: O(n log n) - depende da sequência de gaps
- **Caso médio**: O(n^1.5) ou O(n log n) - melhor que O(n²) do Insertion Sort
- **Pior caso**: O(n²) - mas raro com boas sequências de gap

**Por quê?**
- Performance depende da sequência de gaps escolhida
- Sequência de Knuth (1, 4, 13, 40, ...): O(n^1.5)
- Sequência de Shell (n/2, n/4, ...): O(n²) no pior caso
- Exemplo: array com 100 elementos, gap Knuth → ~300-400 comparações

**Complexidade de Espaço:**
- **O(1)** - ordena in-place, usa apenas variáveis auxiliares
- Não cria arrays ou estruturas extras

**Shell Sort vs Outros Algoritmos:**

📊 **Shell Sort - Vantagens:**
- ✅ **Melhoria do Insertion Sort**: Mais rápido que Insertion Sort puro
- ✅ **In-place**: Ordena no próprio array
- ✅ **Simples**: Fácil de entender e implementar
- ✅ **Bom para arrays médios**: Melhor que O(n²) na prática

📊 **Shell Sort - Desvantagens:**
- ❌ **Não estável**: Pode mudar ordem de elementos iguais
- ❌ **Complexidade não garantida**: Pior caso ainda pode ser O(n²)
- ❌ **Depende da sequência**: Performance varia com escolha de gaps

**Quando usar?**
- Arrays médios (50-1000 elementos)
- Quando você quer algo melhor que Insertion Sort
- Quando espaço é limitado (in-place)
- Como alternativa ao Quick Sort quando precisa de garantias

**Sequências de gap comuns:**
- **Shell original**: n/2, n/4, n/8, ... → O(n²) pior caso
- **Knuth**: (3^k - 1) / 2 → O(n^1.5)
- **Sedgewick**: Complexa mas eficiente → O(n^4/3)
- **Ciura**: Sequência empírica otimizada


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0001ms average
- **Slowest:** 0.0001ms average
- **Difference:** 0.0% slower

---

*Generated automatically by benchmarking suite*
