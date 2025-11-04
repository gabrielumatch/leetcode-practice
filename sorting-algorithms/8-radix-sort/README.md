# 8 Radix Sort

**Last Updated:** Nov 4, 2025, 5:30 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 5/5 | 1.3579ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000409ms | 0.001000ms | 0.000000ms | 1.763600ms | - |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 | Single element | Already sorted | Example 3 |
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

**Radix Sort - Versão Simples e Explicada**

Radix Sort ordena números dígito por dígito, da direita para a esquerda (ou vice-versa)!

**Como funciona:**
1. Ordena pelos dígitos menos significativos primeiro (unidades)
2. Depois ordena pelos próximos dígitos (dezenas, centenas, etc.)
3. Usa Counting Sort como algoritmo estável para ordenar cada dígito
4. Continua até ordenar pelo dígito mais significativo
5. Resultado: array ordenado!

**Exemplo passo a passo:**
Array inicial: [170, 45, 75, 90, 802, 24, 2, 66]

**Passo 1 - Ordenar por dígito das unidades (1º dígito):**
Conta frequências de cada dígito (0-9):
- 0: aparece em 170, 90, 802
- 2: aparece em 802, 2
- 4: aparece em 24
- 5: aparece em 45, 75
- 6: aparece em 66
- 7: aparece em 75

Após Counting Sort por unidades:
[170, 90, 802, 2, 24, 45, 75, 66]
✓ Ordenado por último dígito!

**Passo 2 - Ordenar por dígito das dezenas (2º dígito):**
Conta frequências:
- 0: aparece em 802, 2
- 2: aparece em 24
- 4: aparece em 45
- 6: aparece em 66
- 7: aparece em 170, 75, 90

Após Counting Sort por dezenas:
[802, 2, 24, 45, 66, 170, 75, 90]
✓ Ordenado por dois últimos dígitos!

**Passo 3 - Ordenar por dígito das centenas (3º dígito):**
Conta frequências:
- 0: aparece em 2, 24, 45, 66, 75, 90 (números com menos de 3 dígitos)
- 1: aparece em 170
- 8: aparece em 802

Após Counting Sort por centenas:
[2, 24, 45, 66, 75, 90, 170, 802]
✓ Pronto! Ordenado!

**Complexidade de Tempo:**
- **Melhor caso**: O(d × (n + k)) - onde d é número de dígitos, k é base (10)
- **Caso médio**: O(d × (n + k)) - sempre faz d passadas de Counting Sort
- **Pior caso**: O(d × (n + k)) - sempre faz d passadas de Counting Sort

**Por quê O(d × (n + k))?**
- d = número de dígitos do maior número
- Cada passada usa Counting Sort: O(n + k) onde k = 10 (dígitos 0-9)
- Total: d × O(n + k) = O(d × (n + k))
- Exemplo: números até 999 (3 dígitos), 100 elementos → 3 × (100 + 10) = 330

**Complexidade de Espaço:**
- **O(n + k)** - precisa de array auxiliar para Counting Sort
- Onde k = 10 (dígitos 0-9), então na prática O(n)

**Radix Sort vs Outros Algoritmos:**

📊 **Radix Sort - Vantagens:**
- ✅ **Linear quando d é pequeno**: O(d × n) quando d << n
- ✅ **Sem comparações**: Não compara elementos entre si
- ✅ **Estável**: Mantém ordem de elementos iguais
- ✅ **Previsível**: Performance consistente

📊 **Radix Sort - Desvantagens:**
- ❌ **Apenas números inteiros**: Não funciona bem com decimais ou strings
- ❌ **Depende do número de dígitos**: Pior quando números são muito grandes
- ❌ **Espaço extra**: Precisa de O(n) espaço para Counting Sort

**Quando usar?**
- Números inteiros não negativos
- Quando o range de dígitos é limitado
- Quando você sabe que números têm poucos dígitos
- Como parte de algoritmos mais complexos

**Otimizações comuns:**
- Usar base maior (ex: 256 em vez de 10) para reduzir número de passadas
- Ordenar do dígito mais significativo para o menos (MSD Radix)
- Para números negativos, usar offset ou tratar separadamente


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0004ms average
- **Slowest:** 0.0004ms average
- **Difference:** 0.0% slower

---

*Generated automatically by benchmarking suite*
