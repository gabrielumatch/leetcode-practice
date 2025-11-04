export const description = `
**Counting Sort - Count and Fill**

Conta quantos 0s, 1s e 2s existem.
Depois preenche o array: primeiro todos 0s, depois 1s, depois 2s.

**Complexidade:** O(n) tempo, O(1) espaço (usa apenas 3 contadores)
`;

/**
 * Sort Colors - Counting Sort Approach
 *
 * Estratégia diferente:
 * 1. Conta quantos 0s, 1s e 2s existem
 * 2. Preenche array: primeiro 0s, depois 1s, depois 2s
 */
export function solution(nums: number[]): number[] {
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    // Conta cada cor
    for (const num of nums) {
        if (num === 0) count0++;
        else if (num === 1) count1++;
        else count2++;
    }

    // Preenche array
    let i = 0;
    // Preenche 0s
    while (count0 > 0) {
        nums[i] = 0;
        i++;
        count0--;
    }
    // Preenche 1s
    while (count1 > 0) {
        nums[i] = 1;
        i++;
        count1--;
    }
    // Preenche 2s
    while (count2 > 0) {
        nums[i] = 2;
        i++;
        count2--;
    }

    return nums;
}

