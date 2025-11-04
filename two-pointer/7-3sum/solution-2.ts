export const description = `
**Hash Set - No Sorting**

Usa um Set para armazenar valores já vistos. Para cada par (i, j),
procura se -(nums[i] + nums[j]) existe no Set.

**Complexidade:** O(n²) tempo, O(n) espaço
`;

/**
 * 3Sum - Hash Set Approach
 *
 * Estratégia diferente:
 * 1. Para cada par (i, j), procura se -(nums[i] + nums[j]) existe
 * 2. Usa Set para rastrear valores já vistos
 * 3. Precisa ordenar resultado final para evitar duplicatas
 */
export function solution(nums: number[]): number[][] {
    const result: number[][] = [];
    const seen = new Set<string>();

    for (let i = 0; i < nums.length - 2; i++) {
        const set = new Set<number>();

        for (let j = i + 1; j < nums.length; j++) {
            const complement = -(nums[i] + nums[j]);

            if (set.has(complement)) {
                // Encontrou triplo!
                const triplet = [nums[i], complement, nums[j]].sort((a, b) => a - b);
                const key = triplet.join(',');

                // Evita duplicatas
                if (!seen.has(key)) {
                    seen.add(key);
                    result.push(triplet);
                }
            }

            set.add(nums[j]);
        }
    }

    // Ordena o resultado final para garantir ordem consistente
    return result.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        if (a[1] !== b[1]) return a[1] - b[1];
        return a[2] - b[2];
    });
}

