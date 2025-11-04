export const description = `
**Two Pointers - Nested Loops**

**O Problema:**
Encontrar 4 números que somam target. Extensão do 3Sum, mas mais complexo.

**Estratégia:**
1. Ordena o array
2. Dois loops externos (i, j) fixam os dois primeiros números
3. Two pointers (left, right) para os dois últimos números
4. Soma = nums[i] + nums[j] + nums[left] + nums[right]
5. Se soma < target: left++
6. Se soma > target: right--
7. Se soma == target: adiciona quádrupla e pula duplicatas

**Complexidade:** O(n³) tempo, O(1) espaço (ou O(n) se contar ordenação)
`;

/**
 * 4Sum - Two Pointers Approach
 *
 * Extensão do 3Sum: fixa dois números e usa two pointers para os outros dois
 */
export function solution(input: { nums: number[]; target: number }): number[][] {
    const { nums, target } = input;
    const result: number[][] = [];

    if (nums.length < 4) return result;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 3; i++) {
        // Pula duplicatas do primeiro elemento
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < nums.length - 2; j++) {
            // Pula duplicatas do segundo elemento
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1;
            let right = nums.length - 1;
            const twoSumTarget = target - nums[i] - nums[j];

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum < twoSumTarget) {
                    left++;
                } else if (sum > twoSumTarget) {
                    right--;
                } else {
                    // Encontrou quádrupla!
                    result.push([nums[i], nums[j], nums[left], nums[right]]);

                    // Pula duplicatas do left
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    // Pula duplicatas do right
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }

                    left++;
                    right--;
                }
            }
        }
    }

    return result;
}

