# 3 Insertion Sort

**Last Updated:** Nov 4, 2025, 5:30 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 5/5 | 0.0090ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000057ms | 0.000200ms | 0.000000ms | 0.809800ms | - |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Single element | Reverse order | Already sorted |
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

**Insertion Sort - Versão Simples e Explicada**

Insertion Sort é como ordenar cartas de baralho na sua mão!

**Como funciona:**
1. Começa do segundo elemento (índice 1)
2. Para cada elemento, compara com os elementos à esquerda (já ordenados)
3. Desloca os elementos maiores para a direita
4. Insere o elemento atual na posição correta
5. Repete até ordenar todos os elementos

**Exemplo passo a passo:**
Array inicial: [12, 11, 13, 5, 6]

Passo 1 (elemento 11):
- Elemento atual: 11
- Compara com 12: 11 < 12 → desloca 12 para direita → [11, 12, 13, 5, 6]
- Insere 11 na posição 0 ✓

Passo 2 (elemento 13):
- Elemento atual: 13
- Compara com 12: 13 > 12 → não precisa mover → [11, 12, 13, 5, 6] ✓

Passo 3 (elemento 5):
- Elemento atual: 5
- Compara com 13: 5 < 13 → desloca 13 → [11, 12, 5, 13, 6]
- Compara com 12: 5 < 12 → desloca 12 → [11, 5, 12, 13, 6]
- Compara com 11: 5 < 11 → desloca 11 → [5, 11, 12, 13, 6]
- Insere 5 na posição 0 ✓

Passo 4 (elemento 6):
- Elemento atual: 6
- Compara com 13: 6 < 13 → desloca 13 → [5, 11, 12, 6, 13]
- Compara com 12: 6 < 12 → desloca 12 → [5, 11, 6, 12, 13]
- Compara com 11: 6 < 11 → desloca 11 → [5, 6, 11, 12, 13]
- Compara com 5: 6 > 5 → insere 6 na posição 1 ✓
- Resultado: [5, 6, 11, 12, 13] ✓ Pronto! Ordenado!

**Complexidade de Tempo:**
- **Pior caso**: O(n²) - quando o array está em ordem inversa
- **Melhor caso**: O(n) - quando já está ordenado, apenas compara sem trocar
- **Caso médio**: O(n²) - para arrays aleatórios

**Por quê?**
- Melhor caso (já ordenado): n-1 comparações, 0 trocas = O(n)
- Pior caso (ordem inversa): n(n-1)/2 comparações = O(n²)
- Exemplo: array [5,4,3,2,1] → 4+3+2+1 = 10 comparações + 10 trocas

**Complexidade de Espaço:**
- **O(1)** - espaço extra constante
- Usa apenas variáveis auxiliares (key, i, j)
- Não cria arrays ou estruturas extras (exceto a cópia do input, que é opcional)

**Insertion Sort vs Outros Algoritmos:**

📊 **Insertion Sort - Vantagens:**
- ✅ **Simples**: Fácil de entender e implementar
- ✅ **Eficiente para pequenos arrays**: Na prática, muito rápido para arrays pequenos
- ✅ **Adaptativo**: Funciona muito bem com arrays quase ordenados (O(n))
- ✅ **Estável**: Mantém a ordem de elementos iguais
- ✅ **In-place**: Ordena sem usar espaço extra
- ✅ **Online**: Pode ordenar conforme recebe novos elementos

📊 **Insertion Sort - Desvantagens:**
- ❌ **Lento para arrays grandes**: O(n²) no pior caso
- ❌ **Muitas comparações**: Para arrays grandes, faz muitas comparações

**Quando usar?**
- Arrays pequenos (menos de 50 elementos)
- Arrays quase ordenados
- Arrays que chegam online (um elemento por vez)
- Como parte de algoritmos mais complexos (ex: Tim Sort usa Insertion Sort para pequenos subarrays)


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0001ms average
- **Slowest:** 0.0001ms average
- **Difference:** 0.0% slower

---

*Generated automatically by benchmarking suite*
