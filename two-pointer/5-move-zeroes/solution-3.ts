export const description = `
**Single Loop - Write and Zero**

1 loop: escreve não-zeros e zera posições originais ao mesmo tempo.
Diferente das outras: zera enquanto escreve, não precisa preencher depois.

**Complexidade:** O(n) tempo, O(1) espaço
`;

/**
 * Single Loop Approach - Alternative solution
 * O(n) time, O(1) space
 *
 * Different approach: single pass writing non-zeros and filling zeros
 * More efficient - no temporary array needed, single loop
 */
export function solution(nums: number[]): number[] {
    let writeIndex = 0;

    // Loop único: escreve não-zeros e zera posições já processadas
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Escreve não-zero na posição correta
            nums[writeIndex] = nums[i];
            // Se não estava na mesma posição, zera a posição original
            if (i !== writeIndex) {
                nums[i] = 0;
            }
            writeIndex++;
        }
    }

    return nums;
}
