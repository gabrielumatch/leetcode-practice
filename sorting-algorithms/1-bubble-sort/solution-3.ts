export const description = `
Compleixade O(n^2)
Space Complexity O(1)
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
        let skip = false;
        for (let j = 0; j < size - 1 - i; j++) {
            if(nums[j] > nums[j + 1]) {
                const temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
                skip = true;
            }

        }
        if(!skip) {
            break;
        }
    }


    console.log(nums);
    return nums;
}

