# 10 4sum

**Last Updated:** Nov 4, 2025, 7:09 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 4/4 | 0.0262ms |
| Solution 2 | ✅ Pass | 4/4 | 0.0393ms |
| Solution 3 | ✅ Pass | 4/4 | 0.0321ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000164ms | 0.000300ms | 0.000000ms | 0.936600ms | - |
| 🥈 | Solution 2 | 0.000277ms | 0.000700ms | 0.000100ms | 1.276200ms | +69.19% |
| 🥉 | Solution 3 | 0.000483ms | 0.001100ms | 0.000000ms | 0.944300ms | +194.31% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 (all same) | Large numbers overflow | Negative target |
|------|----------|----------|----------|----------|----------|
| 🥇 | Solution 1 | 0% 🔥 | 0% 🔥 | +144% 📊 | 0% 🔥 |
| 🥈 | Solution 2 | +117% 📊 | +44% ⚡ | +212% 🐌 | +125% 📊 |
| 🥉 | Solution 3 | +207% 🐌 | +384% 🐌 | 0% 🔥 | +163% 📊 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Two Pointers - Nested Loops (Otimizado)**

**O Problema (em português simples):**
Encontrar 4 números DIFERENTES no array que somam exatamente o target.

**Analogia:**
Imagine você tem uma lista de preços e quer comprar 4 itens que somam exatamente R$ 100,00.
Precisamos encontrar todas as combinações possíveis!

**Exemplo Prático:**
Array: [1, 0, -1, 0, -2, 2]
Target: 0

Queremos: 4 números que somam 0

Possíveis respostas:
- [-2, -1, 1, 2] → -2 + (-1) + 1 + 2 = 0 ✓
- [-2, 0, 0, 2] → -2 + 0 + 0 + 2 = 0 ✓  
- [-1, 0, 0, 1] → -1 + 0 + 0 + 1 = 0 ✓

**Importante:**
- Os 4 números devem vir de POSIÇÕES diferentes no array
- Mas o VALOR pode repetir (ex: usar dois zeros)
- Não pode usar a mesma posição duas vezes

**Como funciona (passo a passo detalhado):**

Array original: [1, 0, -1, 0, -2, 2]
Array ordenado: [-2, -1, 0, 0, 1, 2]
                 ↑   ↑   ↑  ↑  ↑  ↑
                 0   1   2  3  4  5  (índices)

**Passo 1: Fixa i=0 (valor -2), j=1 (valor -1)**
   Queremos: target - (-2) - (-1) = 0 + 2 + 1 = 3
   Precisamos de 2 números que somam 3

   Two pointers: left=2 (valor 0), right=5 (valor 2)
   - Soma: 0 + 2 = 2 < 3 → precisa aumentar → left++
   
   left=3 (valor 0), right=5 (valor 2)
   - Soma: 0 + 2 = 2 < 3 → precisa aumentar → left++
   
   left=4 (valor 1), right=5 (valor 2)
   - Soma: 1 + 2 = 3 == 3 ✓ ENCONTROU!
   - Resposta: [-2, -1, 1, 2]

**Passo 2: Fixa i=0 (valor -2), j=2 (valor 0)**
   Queremos: target - (-2) - 0 = 0 + 2 = 2
   Precisamos de 2 números que somam 2

   Two pointers: left=3 (valor 0), right=5 (valor 2)
   - Soma: 0 + 2 = 2 == 2 ✓ ENCONTROU!
   - Resposta: [-2, 0, 0, 2]

**E assim por diante...**

**A ideia:**
- Dois loops fixam os 2 primeiros números
- Two pointers procuram os 2 últimos números que completam a soma

**Complexidade:** O(n³) tempo, O(1) espaço (ou O(n) se contar ordenação)


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Recursive kSum - Generalization**

**A Ideia (em português simples):**
Ao invés de fixar 2 números manualmente, usa RECURSÃO para reduzir o problema:
- 4Sum → precisa de 4 números
- Fixa 1 número → agora precisa de 3 números (3Sum)
- Fixa mais 1 número → agora precisa de 2 números (2Sum)
- 2Sum resolve com two pointers! (CASO BASE - para aqui!)

**Por que paramos em 2Sum?**
- 2Sum é o menor problema que faz sentido: "encontrar 2 números que somam X"
- 1Sum seria: "encontrar 1 número igual a X" → isso é só buscar no array, não é "soma"
- 0Sum não existe: "encontrar 0 números que somam X" → não faz sentido
- Two pointers é a solução ÓTIMA para 2Sum (O(n) tempo, O(1) espaço)
- Continuar recursão além disso seria ineficiente e desnecessário!

**Vantagem:**
Funciona para QUALQUER k (2Sum, 3Sum, 4Sum, 5Sum, etc.) sem mudar a lógica!

**Exemplo Passo a Passo:**

Array: [1, 0, -1, 0, -2, 2] ordenado: [-2, -1, 0, 0, 1, 2]
Target: 0

**Chamada inicial:** kSum(0, 4, 0)
"Preciso de 4 números que somam 0"

**Nível 1 (4Sum):**
- Fixa i=0: valor -2
- Agora precisa de 3 números que somam: 0 - (-2) = 2
- Chama: kSum(1, 3, 2) ← "Preciso de 3 números que somam 2"

  **Nível 2 (3Sum):**
  - Fixa i=1: valor -1
  - Agora precisa de 2 números que somam: 2 - (-1) = 3
  - Chama: kSum(2, 2, 3) ← "Preciso de 2 números que somam 3"

    **Nível 3 (2Sum):**
    - Two pointers: left=2 (0), right=5 (2)
    - Soma: 0 + 2 = 2 < 3 → left++
    - left=3 (0), right=5 (2)
    - Soma: 0 + 2 = 2 < 3 → left++
    - left=4 (1), right=5 (2)
    - Soma: 1 + 2 = 3 == 3 ✓
    - Retorna: [[1, 2]]

  - Adiciona o -1: [[-1, 1, 2]]

- Adiciona o -2: [[-2, -1, 1, 2]] ✓

**A Mágica:**
A função kSum funciona para QUALQUER k >= 2:
- **k=2 (CASO BASE)**: usa two pointers - para aqui!
- **k>2 (RECURSÃO)**: fixa 1 número e chama kSum(k-1)

**Por que k=2 é o caso base?**
- 2Sum é o menor problema "de soma" que faz sentido
- Two pointers é a solução mais eficiente (O(n) tempo)
- Se continuássemos para k=1: seria apenas "buscar número X" → não é soma!
- Se continuássemos para k=0: não existe "0 números que somam X"

**Árvore de Recursão (visual):**

Nível 1: kSum(0, 4, 0) - "4 números que somam 0"
  |
  +-- Fixa -2 → Nível 2: kSum(1, 3, 2) - "3 números que somam 2"
       |
       +-- Fixa -1 → Nível 3: kSum(2, 2, 3) - "2 números que somam 3"
            |
            +-- Two pointers encontra: [1, 2]
            +-- Retorna: [[-1, 1, 2]]
       |
       +-- Fixa 0 → Nível 3: kSum(3, 2, 2) - "2 números que somam 2"
            |
            +-- Two pointers encontra: [0, 2]
            +-- Retorna: [[0, 0, 2]]
  |
  +-- Fixa -1 → Nível 2: kSum(2, 3, 1) - "3 números que somam 1"
       +-- ... (continua recursivamente)

**Por que usar recursão?**
- **Código mais limpo**: uma função para todos os kSum
- **Reutilizável**: funciona para 2Sum, 3Sum, 4Sum, 5Sum, etc.
- **Fácil de entender**: divide o problema em subproblemas menores

**Diferença da Solution 1:**
- Solution 1: fixa 2 números com loops, depois usa two pointers
- Solution 2: fixa 1 número por vez, recursivamente, até chegar em 2Sum

**Complexidade:** O(n³) tempo, O(k) espaço (recursão)


### Solution 3 — [`solution-3.ts`](./solution-3.ts)

**Brute Force - 4 Loops Aninhados**

**O Problema:**
Testa TODAS as combinações possíveis de 4 números sem nenhuma otimização.

**Estratégia:**
4 loops aninhados que testam cada combinação possível:
- i: primeiro número (0 até n-4)
- j: segundo número (i+1 até n-3)
- k: terceiro número (j+1 até n-2)
- l: quarto número (k+1 até n-1)

**Exemplo:**
Array: [1, 0, -1, 0, -2, 2], target = 0

Testa TODAS as combinações:
- i=0, j=1, k=2, l=3 → [1, 0, -1, 0] → soma = 0? ✓
- i=0, j=1, k=2, l=4 → [1, 0, -1, -2] → soma = -2? ✗
- i=0, j=1, k=2, l=5 → [1, 0, -1, 2] → soma = 2? ✗
- ... (continua testando todas)
- i=0, j=1, k=3, l=4 → [1, 0, 0, -2] → soma = -1? ✗
- ... (milhares de combinações)

**Desvantagens:**
- Muito lento para arrays grandes (O(n⁴))
- Não aproveita que o array pode ser ordenado
- Testa muitas combinações desnecessárias

**Complexidade:** O(n⁴) tempo, O(1) espaço (ou O(n) para duplicatas)


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0002ms average
- **Slowest:** 0.0005ms average
- **Difference:** 194.3% slower

---

*Generated automatically by benchmarking suite*
