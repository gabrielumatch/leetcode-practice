# 11 Interval List Intersections

**Last Updated:** Nov 4, 2025, 6:57 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 4/4 | 0.0167ms |
| Solution 2 | ✅ Pass | 4/4 | 0.0118ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000050ms | 0.000300ms | 0.000000ms | 1.258600ms | - |
| 🥈 | Solution 2 | 0.000059ms | 0.000300ms | 0.000000ms | 0.985500ms | +18.47% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Empty second list | Empty first list | Single interval overlap |
|------|----------|----------|----------|----------|----------|
| 🥇 | Solution 1 | 0% 🔥 | 0% 🔥 | +41% ⚡ | 0% 🔥 |
| 🥈 | Solution 2 | +17% ⚡ | +3% 🔥 | 0% 🔥 | +3% 🔥 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Two Pointers - Merge Intervals**

**O Problema (em português simples):**
Você tem duas listas de intervalos. Cada intervalo é [início, fim].
Precisa encontrar TODAS as partes que os intervalos das duas listas têm em COMUM.

**O que é um intervalo?**
[0, 5] significa: números de 0 até 5 (incluindo 0 e 5)
Visual: |------| (de 0 a 5)

**O que é interseção?**
A parte que dois intervalos têm em comum!

**Exemplo Visual:**
firstList:  [0, 2]     |--|
            [5, 10]            |-----|
            
secondList: [1, 5]      |----|
            [8, 12]               |-----|

Interseções:
- [0,2] com [1,5] → parte comum: [1, 2] ✓
- [5,10] com [1,5] → parte comum: [5, 5] ✓ (só o ponto 5)
- [5,10] com [8,12] → parte comum: [8, 10] ✓

**Como calcular a interseção?**
Dados dois intervalos [a1, b1] e [a2, b2]:
- Início da interseção = max(a1, a2)  ← o maior início
- Fim da interseção = min(b1, b2)     ← o menor fim
- Se início <= fim: há interseção!

**Exemplo Passo a Passo:**

firstList = [[0, 2], [5, 10]]
secondList = [[1, 5], [8, 12]]

**Passo 1: i=0 [0,2] vs j=0 [1,5]**
   Início: max(0, 1) = 1
   Fim: min(2, 5) = 2
   Como 1 <= 2: há interseção! → [1, 2]
   [0,2] termina em 2, [1,5] termina em 5
   Como 2 < 5, move i (primeira lista) → i++

**Passo 2: i=1 [5,10] vs j=0 [1,5]**
   Início: max(5, 1) = 5
   Fim: min(10, 5) = 5
   Como 5 <= 5: há interseção! → [5, 5] (só o ponto 5)
   [5,10] termina em 10, [1,5] termina em 5
   Como 5 < 10, move j (segunda lista) → j++

**Passo 3: i=1 [5,10] vs j=1 [8,12]**
   Início: max(5, 8) = 8
   Fim: min(10, 12) = 10
   Como 8 <= 10: há interseção! → [8, 10]
   [5,10] termina em 10, [8,12] termina em 12
   Como 10 < 12, move i → i++

**Resultado final:** [[1,2], [5,5], [8,10]]

**Por que move o que termina primeiro?**
Porque o intervalo que já terminou não pode mais ter interseções com os próximos!

**Casos Especiais:**

**Sem interseção:**
[1, 3] e [5, 7] → max(1,5)=5, min(3,7)=3 → 5 > 3 ✗ Sem interseção!

**Interseção de um ponto:**
[5, 5] e [5, 5] → max(5,5)=5, min(5,5)=5 → 5 <= 5 ✓ Interseção: [5, 5]

**Interseção completa:**
[2, 6] e [3, 4] → max(2,3)=3, min(6,4)=4 → 3 <= 4 ✓ Interseção: [3, 4]

**Complexidade:** O(n + m) tempo, O(1) espaço (sem contar resultado)


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Brute Force - All Pairs**

Compara TODOS os intervalos da primeira lista com TODOS da segunda.
Simples mas ineficiente para listas grandes.

**Complexidade:** O(n × m) tempo, O(1) espaço (sem contar resultado)


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0001ms average
- **Difference:** 18.5% slower

---

*Generated automatically by benchmarking suite*
