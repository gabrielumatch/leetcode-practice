# 5 Move Zeroes

**Last Updated:** Nov 4, 2025, 6:16 AM

## 🧪 Test Results

| Solution | Status | Tests | Avg Time |
|----------|--------|-------|----------|
| Solution 1 | ✅ Pass | 4/4 | 0.0067ms |
| Solution 2 | ✅ Pass | 4/4 | 0.0075ms |
| Solution 3 | ✅ Pass | 4/4 | 0.0034ms |

## ⚡ Performance Benchmark

| Rank | Solution | Avg (trim) | P95 | Min | Max | vs Fastest |
|------|----------|------------|-----|-----|-----|------------|
| 🥇 | Solution 2 | 0.000047ms | 0.000200ms | 0.000000ms | 1.130500ms | - |
| 🥈 | Solution 3 | 0.000048ms | 0.000100ms | 0.000000ms | 0.694500ms | +2.99% |
| 🥉 | Solution 1 | 0.000057ms | 0.000200ms | 0.000000ms | 1.587800ms | +21.11% |

**Metrics:**
- **Avg (trim)**: Average of fastest 95% runs (removes top 5% outliers) - used for ranking
- **P95**: 95th percentile - 95% of runs were faster than this
- **Min/Max**: Best and worst times across all runs

**Timer:** Uses process.hrtime.bigint() for nanosecond precision (not limited by ~0.1ms Windows timer).

## 📊 Detailed Breakdown (by test case)


| Rank | Solution | Example 1 | Example 2 (single zero) | No zeroes | Multiple zeroes at start |
|------|----------|----------|----------|----------|----------|
| 🥇 | Solution 2 | +19% ⚡ | +36% ⚡ | 0% 🔥 | +7% ⚡ |
| 🥈 | Solution 3 | 0% 🔥 | 0% 🔥 | +50% ⚡ | 0% 🔥 |
| 🥉 | Solution 1 | +15% ⚡ | +56% 📊 | +65% 📊 | +30% ⚡ |

**Legend:** 🔥 Fastest (< 5% diff) · ⚡ Good (< 50%) · 📊 OK (< 200%) · 🐌 Slow (≥ 200%)

**Methodology:**
- **Round-robin execution**: Solutions alternate in each iteration (fairness!)
- 100000 iterations per test case (all solutions face same conditions)
- **Trimmed mean** (95% best runs) balances stability and sensitivity
- Nanosecond-precision timing via process.hrtime.bigint()


## 📝 Solution Descriptions

### Solution 1 — [`solution-1.ts`](./solution-1.ts)

**Two Pointers - 2 Loops**

Move não-zeros para o início, depois preenche zeros no final.
Usa 2 loops separados: um para mover não-zeros, outro para preencher zeros.

**Complexidade:** O(n) tempo, O(1) espaço


### Solution 2 — [`solution-2.ts`](./solution-2.ts)

**Swapping Approach - 1 Loop**

Troca zeros com não-zeros conforme encontra. Usa apenas 1 loop com swap.
Mais eficiente que solution-1 pois não precisa de segundo loop.

**Complexidade:** O(n) tempo, O(1) espaço


### Solution 3 — [`solution-3.ts`](./solution-3.ts)

**Single Loop - Write and Zero**

1 loop: escreve não-zeros e zera posições originais ao mesmo tempo.
Diferente das outras: zera enquanto escreve, não precisa preencher depois.

**Complexidade:** O(n) tempo, O(1) espaço


## 📊 Conclusion

**Winner:** Solution 2 🥇

- **Fastest:** 0.0000ms average
- **Slowest:** 0.0001ms average
- **Difference:** 21.1% slower

---

*Generated automatically by benchmarking suite*
