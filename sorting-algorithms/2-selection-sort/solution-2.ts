export const description = `

`;

/**
 * Selection Sort - Versão mais simples e didática
 *
 * @param nums Array de números para ordenar
 * @returns Array ordenado (modifica o array original)
 */
export function solution(nums: number[]): number[] {
    // Criar uma cópia para não modificar o array original
    const arr = [...nums];
    const size = arr.length;
    console.log(nums);

    for(let i = 0; i < size -1; i++) {
        let minIndex = i;
        for(let j = i +1; j < size; j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i) {
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
        }
        console.log(nums);
    }

    return nums;
}

