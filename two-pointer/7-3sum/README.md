# 7 3sum

**Last Updated:** Nov 4, 2025, 6:24 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 4/4 | 0.0170ms |
| Solution 2 | ✅ Pass | 4/4 | 0.0187ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 1 | 0.000254ms | 0.000600ms | 0.000100ms | 1.745100ms | - |
| 🥈 | Solution 2 | 0.000643ms | 0.002300ms | 0.000000ms | 1.886200ms | +153.35% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 (no solution) | Example 3 (all zeroes) | Multiple solutions |
|------|----------|----------|----------|----------|----------|
| 🥇 | Solution 1 | 0% 🔥 | +49% ⚡ | 0% 🔥 | 0% 🔥 |
| 🥈 | Solution 2 | +258% 🐌 | 0% 🔥 | +77% 📊 | +162% 📊 |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Two Pointers - Sorted Array**

**O Problema:**
Encontrar 3 números que somam zero. Não pode usar o mesmo índice duas vezes.

**Exemplo Passo a Passo:**
Array: [-1, 0, 1, 2, -1, -4]

1. Ordena: [-4, -1, -1, 0, 1, 2]

2. Fixa i=0 (valor -4):
   - Queremos: -(-4) = 4
   - Two pointers: left=1 (-1), right=5 (2)
   - Soma: -1 + 2 = 1 < 4 → left++
   - left=2 (-1), right=5 (2)
   - Soma: -1 + 2 = 1 < 4 → left++
   - left=3 (0), right=5 (2)
   - Soma: 0 + 2 = 2 < 4 → left++
   - left=4 (1), right=5 (2)
   - Soma: 1 + 2 = 3 < 4 → left++
   - left >= right → sem solução para i=0

3. Fixa i=1 (valor -1):
   - Queremos: -(-1) = 1
   - Two pointers: left=2 (-1), right=5 (2)
   - Soma: -1 + 2 = 1 == 1 ✓ Encontrou! [-1, -1, 2]
   - Pula duplicatas e continua...
   - left=3 (0), right=4 (1)
   - Soma: 0 + 1 = 1 == 1 ✓ Encontrou! [-1, 0, 1]

4. Continua para i=2, 3, etc...

**Complexidade:** O(n²) tempo, O(1) espaço


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Hash Set - No Sorting**

Usa um Set para armazenar valores já vistos. Para cada par (i, j),
procura se -(nums[i] + nums[j]) existe no Set.

**Complexidade:** O(n²) tempo, O(n) espaço


## 📊 Conclusion

**Winner:** Solution 1 🥇

- **Fastest:** 0.0003ms average
- **Slowest:** 0.0006ms average
- **Difference:** 153.3% slower

---

*Generated automatically by benchmarking suite*
