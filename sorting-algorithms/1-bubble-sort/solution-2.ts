export const description = `

`;

/**
 * Bubble Sort - Versão mais simples e didática
 *
 * @param nums Array de números para ordenar
 * @returns Array ordenado (modifica o array original)
 */
export function solution(nums: number[]): number[] {

    const size = nums.length;
    console.log(nums);

    for (let i = 0; i < size; i++) {
        // for (let j = 1; j < size - i; j++) {
        // TODO: Implementar comparação e troca de elementos
        if (nums[i] < nums[i + 1]) {
            [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        }
        // }
    }
    console.log(nums);
    return nums;
}

