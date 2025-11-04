export const description = `
**Insertion Sort - Versão Simples e Explicada**

Insertion Sort é como ordenar cartas de baralho na sua mão!

**Como funciona:**
1. Começa do segundo elemento (índice 1)
2. Para cada elemento, compara com os elementos à esquerda (já ordenados)
3. Desloca os elementos maiores para a direita
4. Insere o elemento atual na posição correta
5. Repete até ordenar todos os elementos

**Exemplo passo a passo:**
Array inicial: [12, 11, 13, 5, 6]

Passo 1 (elemento 11):
- Elemento atual: 11
- Compara com 12: 11 < 12 → desloca 12 para direita → [11, 12, 13, 5, 6]
- Insere 11 na posição 0 ✓

Passo 2 (elemento 13):
- Elemento atual: 13
- Compara com 12: 13 > 12 → não precisa mover → [11, 12, 13, 5, 6] ✓

Passo 3 (elemento 5):
- Elemento atual: 5
- Compara com 13: 5 < 13 → desloca 13 → [11, 12, 5, 13, 6]
- Compara com 12: 5 < 12 → desloca 12 → [11, 5, 12, 13, 6]
- Compara com 11: 5 < 11 → desloca 11 → [5, 11, 12, 13, 6]
- Insere 5 na posição 0 ✓

Passo 4 (elemento 6):
- Elemento atual: 6
- Compara com 13: 6 < 13 → desloca 13 → [5, 11, 12, 6, 13]
- Compara com 12: 6 < 12 → desloca 12 → [5, 11, 6, 12, 13]
- Compara com 11: 6 < 11 → desloca 11 → [5, 6, 11, 12, 13]
- Compara com 5: 6 > 5 → insere 6 na posição 1 ✓
- Resultado: [5, 6, 11, 12, 13] ✓ Pronto! Ordenado!

**Complexidade de Tempo:**
- **Pior caso**: O(n²) - quando o array está em ordem inversa
- **Melhor caso**: O(n) - quando já está ordenado, apenas compara sem trocar
- **Caso médio**: O(n²) - para arrays aleatórios

**Por quê?**
- Melhor caso (já ordenado): n-1 comparações, 0 trocas = O(n)
- Pior caso (ordem inversa): n(n-1)/2 comparações = O(n²)
- Exemplo: array [5,4,3,2,1] → 4+3+2+1 = 10 comparações + 10 trocas

**Complexidade de Espaço:**
- **O(1)** - espaço extra constante
- Usa apenas variáveis auxiliares (key, i, j)
- Não cria arrays ou estruturas extras (exceto a cópia do input, que é opcional)

**Insertion Sort vs Outros Algoritmos:**

📊 **Insertion Sort - Vantagens:**
- ✅ **Simples**: Fácil de entender e implementar
- ✅ **Eficiente para pequenos arrays**: Na prática, muito rápido para arrays pequenos
- ✅ **Adaptativo**: Funciona muito bem com arrays quase ordenados (O(n))
- ✅ **Estável**: Mantém a ordem de elementos iguais
- ✅ **In-place**: Ordena sem usar espaço extra
- ✅ **Online**: Pode ordenar conforme recebe novos elementos

📊 **Insertion Sort - Desvantagens:**
- ❌ **Lento para arrays grandes**: O(n²) no pior caso
- ❌ **Muitas comparações**: Para arrays grandes, faz muitas comparações

**Quando usar?**
- Arrays pequenos (menos de 50 elementos)
- Arrays quase ordenados
- Arrays que chegam online (um elemento por vez)
- Como parte de algoritmos mais complexos (ex: Tim Sort usa Insertion Sort para pequenos subarrays)
`;

/**
 * Insertion Sort - Versão mais simples e didática
 *
 * @param nums Array de números para ordenar
 * @returns Array ordenado (modifica o array original)
 */
export function solution(nums: number[]): number[] {
    // Criar uma cópia para não modificar o array original
    const arr = [...nums];
    const n = arr.length;

    // Começa do segundo elemento (índice 1)
    // O primeiro elemento (índice 0) já está "ordenado" sozinho
    for (let i = 1; i < n; i++) {
        // Elemento atual que vamos inserir na posição correta
        const key = arr[i];

        // Índice do último elemento da parte ordenada
        let j = i - 1;

        // Desloca todos os elementos maiores que 'key' para a direita
        // Enquanto j >= 0 e o elemento em j é maior que key
        while (j >= 0 && arr[j] > key) {
            // Desloca o elemento maior para a direita
            arr[j + 1] = arr[j];
            // Move para o próximo elemento à esquerda
            j--;
        }

        // Insere o elemento 'key' na posição correta
        // j+1 é a posição onde key deve ficar
        arr[j + 1] = key;
    }

    return arr;
}

