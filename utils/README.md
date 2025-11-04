# 🛠️ Performance & Testing Utilities

Ferramentas para benchmarking e análise de performance das suas soluções LeetCode.

---

## 📦 O que tem aqui

- **`measureTime()`** - Medir tempo de execução de uma função
- **`benchmark()`** - Rodar função N vezes e obter estatísticas
- **`compareImplementations()`** - Comparar múltiplas soluções
- **`measureMemory()`** - Analisar uso de memória
- **`testCases()`** - Testar função com inputs/outputs esperados
- **`analyzeComplexity()`** - Analisar complexidade Big O (experimental)

---

## 🚀 Como Usar

### 1. Comparar Implementações

Compare diferentes soluções e veja qual é mais rápida:

```typescript
import { compareImplementations } from '../utils/performance';

compareImplementations([
    { name: 'Solution 1', fn: () => solution1(input) },
    { name: 'Solution 2', fn: () => solution2(input) },
    { name: 'Solution 3', fn: () => solution3(input) },
], 10000); // 10000 iterações
```

**Output:**
```
🏆 Performance Comparison
================================================================================

🥇 Stack Approach
   Avg: 0.0015ms
   Min: 0.0006ms
   Max: 0.9167ms
   Ops/sec: 667,922

🥈 Regex Replace (36.0% slower)
   Avg: 0.0020ms
   ...

🥉 Two Pointers (in-place) (59.3% slower)
   Avg: 0.0024ms
   ...
```

---

### 2. Testar Casos

Valide sua solução com múltiplos test cases:

```typescript
import { testCases } from '../utils/performance';

testCases(mySolution, [
    { input: 'test', expected: 'output1', name: 'Simple case' },
    { input: 'test2', expected: 'output2', name: 'Edge case' },
    { input: 'test3', expected: 'output3' }, // name é opcional
]);
```

**Output:**
```
🧪 Running Test Cases
================================================================================
✅ Simple case - Passed (0.16ms)
✅ Edge case - Passed (0.01ms)
❌ Test 3 - Failed (0.52ms)
   Expected: "output3"
   Got:      "wrong"

================================================================================
📊 Results: 2 passed, 1 failed
```

---

### 3. Medir Tempo de Uma Função

```typescript
import { measureTime } from '../utils/performance';

const { result, time } = measureTime(() => {
    return myExpensiveFunction(input);
});

console.log(`Resultado: ${result}`);
console.log(`Tempo: ${time.toFixed(4)}ms`);
```

---

### 4. Análise de Memória

```typescript
import { measureMemory, formatBytes } from '../utils/performance';

const { result, memoryUsed, before, after } = measureMemory(() => {
    return myFunction(largeInput);
});

console.log(`Memória usada: ${formatBytes(memoryUsed)}`);
console.log(`Heap antes: ${formatBytes(before.heapUsed)}`);
console.log(`Heap depois: ${formatBytes(after.heapUsed)}`);
```

---

### 5. Análise de Complexidade (Experimental)

Teste como sua função escala com inputs maiores:

```typescript
import { analyzeComplexity } from '../utils/performance';

analyzeComplexity(
    (size) => {
        const arr = Array.from({ length: size }, (_, i) => i);
        mySolution(arr);
    },
    [100, 1000, 10000, 100000] // Tamanhos de input
);
```

**Output:**
```
📈 Time Complexity Analysis
================================================================================

Input size: 100
   Time: 0.0525ms

Input size: 1,000
   Time: 0.4821ms
   Ratio: 9.18x (size 10x)

Input size: 10,000
   Time: 48.2154ms
   Ratio: 100.01x (size 10x)  ← O(n²) detectado!
```

**Como interpretar:**
- Ratio ~10x quando size 10x = **O(n)** 
- Ratio ~100x quando size 10x = **O(n²)**
- Ratio ~1000x quando size 10x = **O(n³)**
- Ratio ~3.3x quando size 10x = **O(n log n)**

---

## 📊 Exemplo Completo

Veja `two-pointer/reverse-only-letters-benchmark.ts` para um exemplo completo que:

1. Define 3 implementações diferentes
2. Testa todas com test cases
3. Compara performance
4. Analisa uso de memória

**Rodar:**
```bash
bun two-pointer/reverse-only-letters-benchmark.ts
```

---

## 💡 Dicas

### Número de Iterações

- **Funções rápidas (<1ms):** 10,000+ iterações
- **Funções médias (1-10ms):** 1,000 iterações
- **Funções lentas (>10ms):** 100 iterações

### Warmup

A função `benchmark()` automaticamente faz **warmup** (10 runs) antes de começar a medir, para evitar distorções causadas por JIT compilation.

### Garbage Collection

Para medições de memória mais precisas, rode com:
```bash
bun --expose-gc seu-arquivo.ts
```

Isso permite que a função `measureMemory()` force garbage collection antes da medição.

---

## 🎯 Quando Usar

### Use benchmarks quando:
- ✅ Comparar diferentes algoritmos
- ✅ Otimizar código crítico
- ✅ Escolher entre trade-offs (tempo vs memória)
- ✅ Validar que otimização realmente funcionou

### NÃO use benchmarks quando:
- ❌ Otimização prematura (código funciona = suficiente)
- ❌ Diferenças insignificantes para o problema
- ❌ Microotimizações que sacrificam legibilidade

---

## 📚 Recursos

- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
- [Performance API](https://nodejs.org/api/perf_hooks.html)
- [V8 Optimization](https://v8.dev/blog/elements-kinds)

---

**Happy Benchmarking! 📈**

