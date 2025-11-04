export const description = `
**Quick Sort - Versão Simples e Explicada**

Quick Sort é um algoritmo de ordenação "dividir para conquistar" muito eficiente!

**É dividir e conquistar? SIM! Mas funciona diferente do Merge Sort:**

**Merge Sort (divide primeiro, depois resolve):**
1. DIVIDE: Divide o array ao meio até ficar com arrays de 1 elemento
2. CONQUISTA: Junta (merge) os arrays ordenados de volta
3. O trabalho pesado (ordenar) acontece na hora de JUNTAR

**Quick Sort (resolve primeiro, depois divide):**
1. CONQUISTA PRIMEIRO: Particiona o array (coloca pivô no lugar certo)
2. DEPOIS DIVIDE: Divide em duas partes (esquerda e direita do pivô)
3. O trabalho pesado (ordenar) acontece ANTES de dividir (particionamento)

**Ambos são "dividir e conquistar" porque:**
- ✅ Dividem o problema em subproblemas menores
- ✅ Resolvem os subproblemas recursivamente
- ✅ Combinam as soluções (Quick Sort: pivô já está no lugar certo após particionar)

**Como funciona:**
1. Escolhe um elemento como "pivô" (geralmente o último)
2. Particiona o array: coloca elementos menores que o pivô à esquerda e maiores à direita
3. O pivô fica na posição correta!
4. Repete recursivamente para as duas partes (esquerda e direita do pivô)
5. Continua até cada parte ter apenas 1 elemento (já ordenado!)

**Exemplo passo a passo:**
Array inicial: [10, 7, 8, 9, 1, 5]

**Passo 1 - Particionar todo o array:**
- Pivô: 5 (último elemento)
- Menores que 5: [1]
- Maiores que 5: [10, 7, 8, 9]
- Resultado: [1, 5, 10, 7, 8, 9] ✓ 5 está na posição correta!

**Passo 2 - Particionar parte esquerda [1]:**
- Apenas 1 elemento → já está ordenado! ✓

**Passo 3 - Particionar parte direita [10, 7, 8, 9]:**
- Pivô: 9 (último elemento)
- Menores que 9: [7, 8]
- Maiores que 9: [10]
- Resultado: [7, 8, 9, 10] ✓ 9 está na posição correta!

**Passo 4 - Particionar [7, 8]:**
- Pivô: 8
- Menores que 8: [7]
- Maiores que 8: [] (vazio)
- Resultado: [7, 8] ✓

**Passo 5 - Particionar [10]:**
- Apenas 1 elemento → já está ordenado! ✓

**Resultado final:** [1, 5, 7, 8, 9, 10] ✓ Pronto! Ordenado!

**Entendendo os parâmetros 'left' e 'right':**
- 'left' e 'right' são ÍNDICES do array, não valores!
- 'left' = índice inicial (parte esquerda) da parte que queremos ordenar
- 'right' = índice final (parte direita) da parte que queremos ordenar
- Na primeira chamada: left=0, right=arr.length-1 (ordena todo o array)
- Nas chamadas recursivas: left e right mudam conforme dividimos o array

**Exemplo visual:**
Array: [10, 7, 8, 9, 1, 5]
Índices:  0   1  2  3  4  5

1ª chamada: quickSortRecursive(arr, 0, 5)
   → Ordena do índice 0 até 5 (todo o array)
   → Após particionar: pivô fica no índice 1

2ª chamada: quickSortRecursive(arr, 0, 0)
   → Ordena parte esquerda: índice 0 até 0 (apenas 1 elemento, já ordenado!)

3ª chamada: quickSortRecursive(arr, 2, 5)
   → Ordena parte direita: índice 2 até 5 ([8, 9, 1, 5])
   → E assim por diante...

**Como funciona o particionamento:**
Array: [10, 7, 8, 9, 1, 5], Pivô: 5 (arr[right])

1. Inicializa: i = -1 (índice do último elemento menor que o pivô)
2. Percorre de left até right-1 (antes do pivô):
   - j=0: 10 > 5 → não faz nada
   - j=1: 7 > 5 → não faz nada
   - j=2: 8 > 5 → não faz nada
   - j=3: 9 > 5 → não faz nada
   - j=4: 1 < 5 → i++, troca arr[i] com arr[j] → [1, 7, 8, 9, 10, 5]
3. Troca pivô com arr[i+1] → [1, 5, 7, 8, 9, 10] ✓

**Complexidade de Tempo:**
- **Melhor caso**: O(n log n) - quando o pivô sempre divide ao meio
- **Caso médio**: O(n log n) - para arrays aleatórios
- **Pior caso**: O(n²) - quando o pivô sempre é o menor ou maior elemento

**Por quê?**
- Melhor caso: altura da árvore = log n, cada nível faz n operações = O(n log n)
- Pior caso: array já ordenado ou inverso → altura = n, cada nível faz n operações = O(n²)
- Exemplo: [1,2,3,4,5] → pivô sempre o último → n-1, n-2, ... = O(n²)

**Complexidade de Espaço:**
- **Melhor caso**: O(log n) - altura da pilha de recursão
- **Pior caso**: O(n) - quando a árvore de recursão fica desbalanceada
- **Otimização**: Usar versão iterativa ou escolher pivô melhor para reduzir espaço

**Quick Sort vs Outros Algoritmos:**

📊 **Quick Sort - Vantagens:**
- ✅ **Rápido**: O(n log n) no caso médio, muito eficiente na prática
- ✅ **In-place**: Ordena no próprio array, usa pouco espaço extra
- ✅ **Cache-friendly**: Acesso sequencial à memória, bom para CPU cache
- ✅ **Versátil**: Funciona bem para diferentes tipos de dados

📊 **Quick Sort - Desvantagens:**
- ❌ **Não estável**: Pode mudar ordem de elementos iguais
- ❌ **Pior caso O(n²)**: Se pivô sempre for extremo (mas raro com boas escolhas)
- ❌ **Recursivo**: Usa pilha de chamadas (pode estourar para arrays muito grandes)

**Quando usar?**
- Arrays grandes e aleatórios
- Quando performance é importante
- Quando estabilidade não é necessária
- Arrays gerais (não específicos como quase ordenados)

**Otimizações comuns:**
- Escolher pivô aleatório (evita pior caso)
- Usar mediana de 3 elementos como pivô
- Para subarrays pequenos, usar Insertion Sort (hibridização)
- Versão iterativa para evitar stack overflow
`;

/**
 * Função auxiliar para particionar o array
 * Coloca elementos menores que o pivô à esquerda e maiores à direita
 *
 * IMPORTANTE: 'left' e 'right' são ÍNDICES do array, não valores!
 * - left: índice inicial (parte esquerda) da parte do array que queremos ordenar
 * - right: índice final (parte direita) da parte do array que queremos ordenar (também é o pivô)
 *
 * Exemplo: se temos [10, 7, 8, 9, 1, 5] e left=0, right=5:
 * - Estamos ordenando do índice 0 até o índice 5
 * - O pivô será arr[5] = 5
 *
 * @param arr Array a ser particionado
 * @param left Índice inicial (esquerda) da parte a ordenar
 * @param right Índice final (direita) da parte a ordenar (também é onde está o pivô)
 * @returns Índice final do pivô após particionamento
 */
function partition(arr: number[], left: number, right: number): number {
    // Escolhe o último elemento como pivô
    const pivot = arr[right];

    // Índice do último elemento menor que o pivô
    // Começa em left - 1 (antes do início da parte esquerda)
    let i = left - 1;

    // Percorre da parte esquerda até antes do pivô
    for (let j = left; j < right; j++) {
        // Se o elemento atual é menor ou igual ao pivô
        if (arr[j] <= pivot) {
            // Incrementa i e troca arr[i] com arr[j]
            // Move elementos menores para a esquerda
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    // Coloca o pivô na posição correta (depois de todos os menores)
    // Troca arr[i+1] com arr[right] (pivô)
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];

    // Retorna o índice do pivô na posição correta
    return i + 1;
}

/**
 * Quick Sort - Versão recursiva e didática
 *
 * IMPORTANTE: Esta função ordena apenas uma PARTE do array (do índice 'left' até 'right')
 * Ela é chamada recursivamente para ordenar diferentes partes conforme divide o array.
 *
 * Exemplo de chamadas recursivas para [10, 7, 8, 9, 1, 5]:
 * 1. quickSortRecursive(arr, 0, 5) → ordena todo o array [0..5]
 *    - Após particionar, pivô fica no índice 1
 * 2. quickSortRecursive(arr, 0, 0) → ordena parte esquerda [0..0] (apenas índice 0, já ordenado!)
 * 3. quickSortRecursive(arr, 2, 5) → ordena parte direita [2..5]
 *    - E assim por diante, dividindo cada vez mais...
 *
 * @param arr Array a ser ordenado
 * @param left Índice inicial (esquerda) da parte a ordenar
 * @param right Índice final (direita) da parte a ordenar
 */
function quickSortRecursive(arr: number[], left: number, right: number): void {
    // Caso base: se left >= right, não há nada para ordenar
    // (array vazio ou com apenas 1 elemento)
    // Exemplo: left=2, right=2 → apenas 1 elemento → já está ordenado!
    if (left >= right) {
        return;
    }

    // Particiona o array e obtém o índice do pivô
    // Após particionar, elementos menores que o pivô estão à esquerda,
    // e maiores à direita. O pivô está na posição correta!
    const pivotIndex = partition(arr, left, right);

    // Ordena recursivamente a parte esquerda (elementos menores que o pivô)
    // Exemplo: se pivotIndex = 1, ordena do índice 0 até 0 (left até pivotIndex-1)
    quickSortRecursive(arr, left, pivotIndex - 1);

    // Ordena recursivamente a parte direita (elementos maiores que o pivô)
    // Exemplo: se pivotIndex = 1, ordena do índice 2 até right (pivotIndex+1 até right)
    quickSortRecursive(arr, pivotIndex + 1, right);
}

/**
 * Quick Sort - Versão mais simples e didática
 *
 * Esta é a função principal que recebe o array dos test cases.
 * Ela chama a função recursiva passando os índices do array completo.
 *
 * @param nums Array de números para ordenar (vem dos test cases)
 * @returns Array ordenado (modifica o array original)
 */
export function solution(nums: number[]): number[] {
    // Criar uma cópia para não modificar o array original
    const arr = [...nums];

    // Ordena o array completo
    // - left = 0 (começa da parte esquerda, primeiro elemento)
    // - right = arr.length - 1 (vai até a parte direita, último elemento)
    //
    // Exemplo: se nums = [10, 7, 8, 9, 1, 5]
    // - arr.length = 6
    // - arr.length - 1 = 5 (índice do último elemento)
    // - Chamamos: quickSortRecursive(arr, 0, 5)
    //   Isso significa: "ordena do índice 0 (esquerda) até o índice 5 (direita)"
    quickSortRecursive(arr, 0, arr.length - 1);

    return arr;
}

