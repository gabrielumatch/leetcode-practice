export const description = `
**Swapping Approach - 1 Loop**

Troca zeros com não-zeros conforme encontra. Usa apenas 1 loop com swap.
Mais eficiente que solution-1 pois não precisa de segundo loop.

**Complexidade:** O(n) tempo, O(1) espaço
`;

/**
 * Swapping Approach - Swap non-zero with zero
 * O(n) time, O(1) space
 *
 * Different approach: swaps non-zero elements with zeros as we find them
 * More efficient as it doesn't need a second pass to fill zeros
 */
export function solution(nums: number[]): number[] {
    let writeIndex = 0;

    // Troca zeros com elementos não-zero
    for (let i = 0; i < nums.length; i++) {
        // Se encontrou elemento não-zero, troca com a posição writeIndex
        if (nums[i] !== 0) {
            // Só troca se não estiver na mesma posição (evita swap desnecessário)
            if (i !== writeIndex) {
                [nums[writeIndex], nums[i]] = [nums[i], nums[writeIndex]];
            }
            writeIndex++;
        }
        // Se é zero, apenas avança o ponteiro i (writeIndex fica no lugar)
    }

    return nums;
}

