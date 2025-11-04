export const description = `
**Comb Sort - Versão Simples e Explicada**

Comb Sort é uma melhoria do Bubble Sort! Funciona como Bubble Sort, mas compara elementos que estão longe um do outro primeiro.

**Como funciona:**
1. Define um "gap" (espaço) entre elementos comparados
2. Compara elementos separados por esse gap (como Bubble Sort)
3. Reduz o gap gradualmente usando um fator de redução (geralmente 1.3)
4. Quando gap = 1, funciona como Bubble Sort normal
5. Nesse ponto, o array já está quase ordenado, então é rápido!

**Exemplo passo a passo:**
Array inicial: [8, 4, 1, 56, 3, -44, 23, -6, 28, 0]
Gap inicial: 10 (tamanho do array)
Fator de redução: 1.3

**Passo 1 - Gap = 10:**
Compara elementos separados por 10 posições (não há, então gap é reduzido)
Gap novo: 10 / 1.3 = 7

**Passo 2 - Gap = 7:**
Compara elementos separados por 7 posições:
- Índices 0 e 7: 8 vs -6 → 8 > -6 → troca → [-6, 4, 1, 56, 3, -44, 23, 8, 28, 0]
- Índices 1 e 8: 4 vs 28 → 4 < 28 → ok
- Índices 2 e 9: 1 vs 0 → 1 > 0 → troca → [-6, 4, 0, 56, 3, -44, 23, 8, 28, 1]

Gap novo: 7 / 1.3 = 5

**Passo 3 - Gap = 5:**
Compara elementos separados por 5 posições:
- Índices 0 e 5: -6 vs -44 → -6 > -44 → troca → [-44, 4, 0, 56, 3, -6, 23, 8, 28, 1]
- Índices 1 e 6: 4 vs 23 → 4 < 23 → ok
- E assim por diante...

Gap novo: 5 / 1.3 = 3

**Passo 4 - Gap = 3:**
Compara elementos separados por 3 posições...
Gap novo: 3 / 1.3 = 2

**Passo 5 - Gap = 2:**
Compara elementos separados por 2 posições...
Gap novo: 2 / 1.3 = 1

**Passo 6 - Gap = 1 (Bubble Sort normal):**
Agora o array já está quase ordenado!
Compara elementos adjacentes como Bubble Sort normal
Resultado: [-44, -6, 0, 1, 3, 4, 8, 23, 28, 56] ✓ Pronto! Ordenado!

**Por que funciona?**
- Gap grande remove "tartarugas" (elementos pequenos no final) rapidamente
- Gap pequeno remove "coelhos" (elementos grandes no início) rapidamente
- Quando gap = 1, array já está quase ordenado → Bubble Sort é rápido!

**Complexidade de Tempo:**
- **Melhor caso**: O(n log n) - quando array já está ordenado
- **Caso médio**: O(n² / 2^p) onde p é número de incrementos - melhor que Bubble Sort
- **Pior caso**: O(n²) - mas muito melhor que Bubble Sort na prática

**Por quê?**
- Gap grande elimina inversões distantes rapidamente
- Gap pequeno faz ajustes finos
- Fator 1.3 é empiricamente otimizado
- Exemplo: array com 100 elementos → ~200-300 comparações (vs 5000 do Bubble Sort)

**Complexidade de Espaço:**
- **O(1)** - ordena in-place, usa apenas variáveis auxiliares
- Não cria arrays ou estruturas extras

**Comb Sort vs Outros Algoritmos:**

📊 **Comb Sort - Vantagens:**
- ✅ **Melhoria do Bubble Sort**: Muito mais rápido que Bubble Sort
- ✅ **In-place**: Ordena no próprio array
- ✅ **Simples**: Fácil de entender e implementar
- ✅ **Bom para arrays médios**: Melhor que O(n²) na prática

📊 **Comb Sort - Desvantagens:**
- ❌ **Não estável**: Pode mudar ordem de elementos iguais
- ❌ **Complexidade não garantida**: Pior caso ainda pode ser O(n²)
- ❌ **Depende do fator**: Performance varia com fator de redução

**Quando usar?**
- Arrays médios (50-1000 elementos)
- Quando você quer algo melhor que Bubble Sort
- Quando espaço é limitado (in-place)
- Como alternativa educacional para entender melhorias de algoritmos

**Fatores de redução comuns:**
- **1.3**: Mais comum e empíricamente otimizado
- **1.25**: Mais conservador, mais passadas
- **1.5**: Mais agressivo, menos passadas mas pode pular gaps ótimos
`;

/**
 * Comb Sort - Versão mais simples e didática
 *
 * @param nums Array de números para ordenar
 * @returns Array ordenado (modifica o array original)
 */
export function solution(nums: number[]): number[] {
    // Criar uma cópia para não modificar o array original
    const arr = [...nums];
    const n = arr.length;

    // Se o array estiver vazio ou tiver apenas 1 elemento, já está ordenado
    if (n <= 1) {
        return arr;
    }

    // Gap inicial: tamanho do array
    let gap = n;

    // Fator de redução: 1.3 é empiricamente otimizado
    // Reduz o gap a cada iteração
    const shrinkFactor = 1.3;

    // Flag para verificar se houve troca
    let swapped = true;

    // Continua enquanto gap > 1 ou houve troca na última passada
    while (gap > 1 || swapped) {
        // Reduz o gap usando o fator de redução
        gap = Math.max(1, Math.floor(gap / shrinkFactor));

        // Flag para verificar se houve troca nesta passada
        swapped = false;

        // Compara elementos separados por 'gap'
        // Funciona como Bubble Sort, mas compara elementos distantes
        for (let i = 0; i + gap < n; i++) {
            // Se o elemento atual é maior que o elemento 'gap' posições à frente
            if (arr[i] > arr[i + gap]) {
                // Troca os elementos
                [arr[i], arr[i + gap]] = [arr[i + gap], arr[i]];
                swapped = true;
            }
        }

        // Quando gap = 1, funciona como Bubble Sort normal
        // Se não houve troca e gap = 1, o array está ordenado!
    }

    return arr;
}

