export const description = `
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
`;

/**
 * Função auxiliar para fazer o merge (juntar) de dois arrays ordenados
 *
 * @param arr Array original
 * @param left Índice inicial do primeiro subarray
 * @param mid Índice do meio (fim do primeiro, início do segundo)
 * @param right Índice final do segundo subarray
 */
function merge(arr: number[], left: number, mid: number, right: number): void {
    // Tamanhos dos dois subarrays
    const n1 = mid - left + 1;  // Tamanho do subarray esquerdo
    const n2 = right - mid;      // Tamanho do subarray direito

    // Criar arrays temporários para armazenar os subarrays
    const leftArray: number[] = new Array(n1);
    const rightArray: number[] = new Array(n2);

    // Copiar dados para os arrays temporários
    for (let i = 0; i < n1; i++) {
        leftArray[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
        rightArray[j] = arr[mid + 1 + j];
    }

    // Índices para percorrer os arrays temporários e o array original
    let i = 0;      // Índice do subarray esquerdo
    let j = 0;      // Índice do subarray direito
    let k = left;   // Índice do array original (onde vamos juntar)

    // Juntar os dois subarrays ordenados
    // Compara elementos de cada subarray e coloca o menor no array original
    while (i < n1 && j < n2) {
        if (leftArray[i] <= rightArray[j]) {
            // Elemento do subarray esquerdo é menor ou igual
            arr[k] = leftArray[i];
            i++;
        } else {
            // Elemento do subarray direito é menor
            arr[k] = rightArray[j];
            j++;
        }
        k++;
    }

    // Copiar os elementos restantes do subarray esquerdo (se houver)
    while (i < n1) {
        arr[k] = leftArray[i];
        i++;
        k++;
    }

    // Copiar os elementos restantes do subarray direito (se houver)
    while (j < n2) {
        arr[k] = rightArray[j];
        j++;
        k++;
    }
}

/**
 * Merge Sort - Versão recursiva e didática
 *
 * @param arr Array a ser ordenado
 * @param left Índice inicial
 * @param right Índice final
 */
function mergeSortRecursive(arr: number[], left: number, right: number): void {
    // Caso base: se left >= right, o subarray tem 0 ou 1 elemento
    // (já está ordenado!)
    if (left >= right) {
        return;
    }

    // Encontrar o ponto médio para dividir o array
    const mid = Math.floor(left + (right - left) / 2);

    // Ordenar a metade esquerda
    mergeSortRecursive(arr, left, mid);

    // Ordenar a metade direita
    mergeSortRecursive(arr, mid + 1, right);

    // Juntar as duas metades ordenadas
    merge(arr, left, mid, right);
}

/**
 * Merge Sort - Versão mais simples e didática
 *
 * @param nums Array de números para ordenar
 * @returns Array ordenado (modifica o array original)
 */
export function solution(nums: number[]): number[] {
    // Criar uma cópia para não modificar o array original
    const arr = [...nums];

    // Ordena o array completo (do índice 0 até o último)
    mergeSortRecursive(arr, 0, arr.length - 1);

    return arr;
}

