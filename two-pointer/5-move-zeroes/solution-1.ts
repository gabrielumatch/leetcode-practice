export const description = `
**Two Pointers - 2 Loops**

Move não-zeros para o início, depois preenche zeros no final.
Usa 2 loops separados: um para mover não-zeros, outro para preencher zeros.

**Complexidade:** O(n) tempo, O(1) espaço
`;

/**
 * Two Pointers - Move non-zero elements first, then fill zeros
 * O(n) time, O(1) space
 */
export function solution(nums: number[]): number[] {
    let writeIndex = 0;

    // Move todos os elementos não-zero para o início
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }

    // Preenche o resto com zeros
    for (let i = writeIndex; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums;
}

