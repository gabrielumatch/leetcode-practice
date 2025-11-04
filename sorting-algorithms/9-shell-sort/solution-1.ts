export const description = `
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
`;

/**
 * Shell Sort - Versão mais simples e didática
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

    // Calcular gap inicial usando sequência de Shell (n/2)
    // Pode ser melhorado com sequência de Knuth ou Sedgewick
    let gap = Math.floor(n / 2);

    // Enquanto gap > 0, continua ordenando
    while (gap > 0) {
        // Insertion Sort para elementos separados por 'gap'
        // Funciona como Insertion Sort normal, mas compara elementos distantes
        for (let i = gap; i < n; i++) {
            // Elemento atual que vamos inserir na posição correta
            const temp = arr[i];
            let j = i;

            // Compara com elementos que estão 'gap' posições atrás
            // Move elementos maiores para frente
            while (j >= gap && arr[j - gap] > temp) {
                // Move o elemento maior para frente
                arr[j] = arr[j - gap];
                // Move para o próximo elemento 'gap' posições atrás
                j -= gap;
            }

            // Insere o elemento na posição correta
            arr[j] = temp;
        }

        // Reduz o gap para a próxima iteração
        // Sequência de Shell: divide por 2
        // Pode ser melhorado com outras sequências (Knuth, Sedgewick)
        gap = Math.floor(gap / 2);
    }

    return arr;
}

