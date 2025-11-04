export const description = `
**Heap Sort - Versão Simples e Explicada**

Heap Sort usa uma estrutura de dados chamada "Heap" (pilha binária) para ordenar!

**O que é um Heap?**
- Uma árvore binária completa onde cada pai é maior que seus filhos (Max Heap)
- Ou cada pai é menor que seus filhos (Min Heap)
- Para ordenação crescente, usamos Max Heap

**Heap e Balanceamento de Árvore Binária - A Conexão:**
Sim! Heap Sort tem muito a ver com balanceamento de árvore binária:

**Similaridades:**
- ✅ **Estrutura de árvore**: Heap é uma árvore binária completa
- ✅ **Propriedade de ordenação**: Como BST, mantém uma propriedade de ordenação
- ✅ **Operação de reorganização**: Heapify é similar a rotações em AVL/Red-Black
- ✅ **Manutenção de invariantes**: Ambos mantêm propriedades que garantem eficiência

**Diferenças:**
- **BST/AVL**: Ordena por valor (esquerda < raiz < direita)
- **Heap**: Ordena por hierarquia (pai >= filhos OU pai <= filhos)
- **BST**: Busca em O(log n), mas pode desbalancear
- **Heap**: Sempre balanceado (árvore completa), mas não serve para busca

**Heapify = Balanceamento?**
- Heapify mantém a propriedade do heap (pai >= filhos)
- Similar a rotações em AVL que mantêm altura balanceada
- Ambos "corrigem" a estrutura quando ela viola as propriedades
- Ambos garantem O(log n) para operações principais

**Como funciona:**
1. Constrói um Max Heap a partir do array (pai >= filhos)
2. O maior elemento está sempre na raiz (índice 0)
3. Troca a raiz com o último elemento e "remove" do heap
4. Reorganiza o heap (heapify) para manter a propriedade
5. Repete até ordenar todos os elementos

**Exemplo passo a passo:**
Array inicial: [12, 11, 13, 5, 6, 7]

**Passo 1 - Construir Max Heap:**
Array: [12, 11, 13, 5, 6, 7]
Representação como árvore:
        12
       /  \\
      11   13
     / \\  /
    5  6 7

Heapify de baixo para cima:
- Índice 2 (13): já está ok (13 > 7)
- Índice 1 (11): já está ok (11 > 5, 11 > 6)
- Índice 0 (12): precisa trocar com 13 → [13, 11, 12, 5, 6, 7]

Max Heap construído:
        13
       /  \\
      11   12
     / \\  /
    5  6 7
Array: [13, 11, 12, 5, 6, 7] ✓

**Passo 2 - Ordenar:**
1. Troca raiz (13) com último (7) → [7, 11, 12, 5, 6, 13] ✓ 13 no lugar certo!
2. Heapify [7, 11, 12, 5, 6] → [12, 11, 7, 5, 6] ✓

3. Troca raiz (12) com último (6) → [6, 11, 7, 5, 12, 13] ✓ 12 no lugar certo!
4. Heapify [6, 11, 7, 5] → [11, 6, 7, 5] → [11, 6, 7, 5] ✓

5. Troca raiz (11) com último (5) → [5, 6, 7, 11, 12, 13] ✓ 11 no lugar certo!
6. Heapify [5, 6, 7] → [7, 6, 5] ✓

7. Troca raiz (7) com último (5) → [5, 6, 7, 11, 12, 13] ✓ 7 no lugar certo!
8. Heapify [5, 6] → [6, 5] ✓

9. Troca raiz (6) com último (5) → [5, 6, 7, 11, 12, 13] ✓ Pronto! Ordenado!

**Como funciona o Heapify (similar ao balanceamento):**
Para um nó no índice i, seus filhos estão em:
- Filho esquerdo: 2*i + 1
- Filho direito: 2*i + 2

Heapify garante que o nó seja maior que seus filhos (mantém a propriedade do heap):
1. Encontra o maior entre pai e filhos
2. Se o maior não é o pai, troca (similar a rotação em AVL)
3. Repete recursivamente no nó trocado (propaga a correção)

**Analogia com Balanceamento:**
- **AVL Tree**: Rotação quando altura difere em mais de 1
- **Heap**: Heapify quando pai < filho (viola propriedade Max Heap)
- Ambos "corrigem" a estrutura para manter propriedades
- Ambos garantem eficiência O(log n)

**Complexidade de Tempo:**
- **Melhor caso**: O(n log n) - sempre precisa construir heap e ordenar
- **Caso médio**: O(n log n) - sempre precisa construir heap e ordenar
- **Pior caso**: O(n log n) - sempre precisa construir heap e ordenar (garantido!)

**Por quê O(n log n)?**
- Construir heap: O(n) - parece estranho, mas é O(n)!
- Extrair n elementos: O(n log n) - cada extração é O(log n)
- Total: O(n) + O(n log n) = O(n log n)
- Exemplo: array com 8 elementos → construir heap: ~8 operações, extrair: 8 × log(8) = 24

**Complexidade de Espaço:**
- **O(1)** - ordena in-place, usa apenas variáveis auxiliares
- Não precisa de arrays ou estruturas extras

**Heap Sort vs Outros Algoritmos:**

📊 **Heap Sort - Vantagens:**
- ✅ **Garantido O(n log n)**: Sempre eficiente, não importa o input
- ✅ **In-place**: Ordena no próprio array, usa O(1) espaço extra
- ✅ **Não recursivo**: Não usa pilha de chamadas (pode ser implementado iterativamente)
- ✅ **Previsível**: Performance consistente

📊 **Heap Sort - Desvantagens:**
- ❌ **Não estável**: Pode mudar ordem de elementos iguais
- ❌ **Mais lento que Quick Sort**: Na prática, constantes maiores
- ❌ **Não adaptativo**: Não se beneficia de arrays parcialmente ordenados
- ❌ **Cache-unfriendly**: Acesso não sequencial à memória

**Quando usar?**
- Quando você precisa de garantia de O(n log n) e espaço O(1)
- Para sistemas embarcados (sem espaço para Merge Sort)
- Quando você precisa do maior/menor elemento rapidamente
- Para implementar filas de prioridade
`;

/**
 * Função auxiliar para manter a propriedade de Max Heap
 * Garante que o nó em 'i' seja maior que seus filhos
 *
 * @param arr Array representando o heap
 * @param n Tamanho do heap
 * @param i Índice do nó a ser heapificado
 */
function heapify(arr: number[], n: number, i: number): void {
    // Assumir que o maior elemento está na raiz (índice i)
    let largest = i;

    // Índices dos filhos na árvore binária
    const left = 2 * i + 1;   // Filho esquerdo
    const right = 2 * i + 2;  // Filho direito

    // Se o filho esquerdo existe e é maior que a raiz
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // Se o filho direito existe e é maior que o maior até agora
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // Se o maior não está na raiz, trocar e continuar heapificando
    if (largest !== i) {
        // Trocar raiz com o maior filho
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Heapificar recursivamente a subárvore afetada
        heapify(arr, n, largest);
    }
}

/**
 * Heap Sort - Versão mais simples e didática
 *
 * @param nums Array de números para ordenar
 * @returns Array ordenado (modifica o array original)
 */
export function solution(nums: number[]): number[] {
    // Criar uma cópia para não modificar o array original
    const arr = [...nums];
    const n = arr.length;

    // Passo 1: Construir Max Heap
    // Começar do último nó que tem filhos (n/2 - 1)
    // E ir até a raiz (índice 0)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Passo 2: Extrair elementos do heap um por um
    // O maior elemento está sempre na raiz (índice 0)
    for (let i = n - 1; i > 0; i--) {
        // Trocar raiz (maior) com o último elemento
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Reduzir o tamanho do heap e reorganizar
        // O elemento na posição i já está ordenado!
        heapify(arr, i, 0);
    }

    return arr;
}

