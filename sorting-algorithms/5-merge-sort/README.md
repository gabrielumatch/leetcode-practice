# 5 Merge Sort

**Last Updated:** Nov 4, 2025, 5:30 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 5/5 | 0.0174ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000177ms | 0.000500ms | 0.000000ms | 1.428100ms | - |

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

**Merge Sort - Versão Simples e Explicada**

Merge Sort é um algoritmo de ordenação "dividir para conquistar" que sempre garante O(n log n)!

**Como funciona:**
1. Divide o array ao meio até ficar com arrays de 1 elemento
2. Arrays de 1 elemento já estão ordenados!
3. Junta (merge) os arrays ordenados de volta, comparando elemento por elemento
4. Repete até juntar tudo em um único array ordenado

**Exemplo passo a passo:**
Array inicial: [38, 27, 43, 3, 9, 82, 10]

**Fase de Divisão (Divide):**
[38, 27, 43, 3, 9, 82, 10]
  ↓
[38, 27, 43] | [3, 9, 82, 10]
  ↓                    ↓
[38] | [27, 43]    [3, 9] | [82, 10]
  ↓      ↓            ↓        ↓
[38] [27] [43]    [3] [9] [82] [10] ✓ Arrays de 1 elemento = ordenados!

**Fase de Junção (Conquer):**
[38] + [27] → Compara: 27 < 38 → [27, 38] ✓
[43] → [43] (sozinho) ✓
[27, 38] + [43] → Compara: 27, 38, 43 → [27, 38, 43] ✓

[3] + [9] → Compara: 3 < 9 → [3, 9] ✓
[82] + [10] → Compara: 10 < 82 → [10, 82] ✓
[3, 9] + [10, 82] → Compara: 3, 9, 10, 82 → [3, 9, 10, 82] ✓

[27, 38, 43] + [3, 9, 10, 82] → Compara elemento por elemento:
- 3 < 27 → 3
- 9 < 27 → 9
- 10 < 27 → 10
- 27 < 82 → 27
- 38 < 82 → 38
- 43 < 82 → 43
- 82 → 82
- Resultado: [3, 9, 10, 27, 38, 43, 82] ✓ Pronto! Ordenado!

**Como funciona o Merge (junção):**
Array esquerdo: [27, 38, 43], Array direito: [3, 9, 10, 82]

1. Compara primeiro elemento de cada: 27 vs 3 → 3 é menor → adiciona 3
2. Compara: 27 vs 9 → 9 é menor → adiciona 9
3. Compara: 27 vs 10 → 10 é menor → adiciona 10
4. Compara: 27 vs 82 → 27 é menor → adiciona 27
5. Compara: 38 vs 82 → 38 é menor → adiciona 38
6. Compara: 43 vs 82 → 43 é menor → adiciona 43
7. Sobrou apenas 82 → adiciona 82
8. Resultado: [3, 9, 10, 27, 38, 43, 82] ✓

**Complexidade de Tempo:**
- **Melhor caso**: O(n log n) - sempre divide ao meio
- **Caso médio**: O(n log n) - sempre divide ao meio
- **Pior caso**: O(n log n) - sempre divide ao meio (garantido!)

**Por quê O(n log n)?**
- Altura da árvore de divisão: log n (divide ao meio sempre)
- Cada nível faz n operações (merge de todos os elementos)
- Total: n × log n = O(n log n)
- Exemplo: array com 8 elementos → altura = log₂(8) = 3 níveis
- Cada nível: 8 operações → 3 × 8 = 24 operações = O(n log n)

**Complexidade de Espaço:**
- **O(n)** - precisa de array auxiliar para fazer o merge
- Cada chamada de merge cria um novo array temporário
- Na prática, pode ser otimizado para usar apenas um array auxiliar

**Merge Sort vs Outros Algoritmos:**

📊 **Merge Sort - Vantagens:**
- ✅ **Garantido O(n log n)**: Sempre eficiente, não importa o input
- ✅ **Estável**: Mantém a ordem de elementos iguais
- ✅ **Previsível**: Performance consistente
- ✅ **Paralelizável**: Fácil de dividir entre múltiplos processadores
- ✅ **Bom para listas ligadas**: Não precisa de acesso aleatório

📊 **Merge Sort - Desvantagens:**
- ❌ **Espaço extra**: Precisa de O(n) espaço adicional
- ❌ **Não in-place**: Não ordena no próprio array (pode ser otimizado)
- ❌ **Mais lento que Quick Sort**: Na prática, constantes maiores

**Quando usar?**
- Quando você precisa de garantia de O(n log n)
- Quando estabilidade é importante
- Para ordenar listas ligadas
- Quando você tem espaço extra disponível
- Para processamento paralelo


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0002ms average
- **Slowest:** 0.0002ms average
- **Difference:** 0.0% slower

---

*Generated automatically by benchmarking suite*
