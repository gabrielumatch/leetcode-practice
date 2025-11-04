export const description = `
Complexidade 0(n^2)
Space Complexity 0(1)
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
        let swapped = false;

        for (let j = 0; j < size - 1 - i; j++) {
            // Se o elemento atual é MAIOR que o próximo, troca (ordem crescente)
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                swapped = true; // Marca que houve troca
            }
        }

        // Otimização: se não houve troca nesta passada, o array já está ordenado!
        if (!swapped) {
            break; // Para o loop mais cedo
        }
    }

    console.log(nums);
    return nums;
}

