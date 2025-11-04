export const description = `
**Remove Duplicates from Sorted Array - Versão Simples e Explicada**

Remove duplicatas de um array ordenado, mantendo apenas os elementos únicos no início.

**Como funciona:**
1. Usa dois ponteiros: "slow" (escreve) e "fast" (lê)
2. O ponteiro slow marca onde colocar o próximo elemento único
3. O ponteiro fast percorre o array procurando novos elementos
4. Quando encontra um elemento diferente, copia para a posição slow
5. Como o array está ordenado, duplicatas estão sempre juntas!

**Exemplo passo a passo:**
Array: [1, 1, 2, 2, 3]

Passo 1: slow=0, fast=1
- nums[1] = 1 é igual a nums[0] = 1 → duplicata, skip

Passo 2: slow=0, fast=2
- nums[2] = 2 é diferente de nums[0] = 1 → novo único!
- slow++ → slow=1
- nums[1] = nums[2] → [1, 2, 2, 2, 3]

Passo 3: slow=1, fast=3
- nums[3] = 2 é igual a nums[1] = 2 → duplicata, skip

Passo 4: slow=1, fast=4
- nums[4] = 3 é diferente de nums[1] = 2 → novo único!
- slow++ → slow=2
- nums[2] = nums[4] → [1, 2, 3, 2, 3]

Resultado: Retorna 3 (primeiros 3 elementos são únicos: [1, 2, 3])

**Complexidade:**
- Tempo: O(n) - percorre o array uma vez
- Espaço: O(1) - usa apenas variáveis auxiliares
`;

/**
 * OPTIMAL SOLUTION - Two Pointers (Tier 1 Global)
 * O(n) time, O(1) space
 *
 * This is the BEST solution:
 * - Uses two pointers technique (industry standard)
 * - Takes advantage of sorted array property
 * - No extra space needed
 * - Single pass through array
 * - Most efficient possible
 */
export function solution(nums: number[]): number {
    let k = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }

    return k + 1;
}

