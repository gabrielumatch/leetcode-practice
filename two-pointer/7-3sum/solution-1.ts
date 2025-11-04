export const description = `
**Two Pointers - Sorted Array**

**O Problema:**
Encontrar 3 números que somam zero. Não pode usar o mesmo índice duas vezes.

**Exemplo Passo a Passo:**
Array: [-1, 0, 1, 2, -1, -4]

1. Ordena: [-4, -1, -1, 0, 1, 2]

2. Fixa i=0 (valor -4):
   - Queremos: -(-4) = 4
   - Two pointers: left=1 (-1), right=5 (2)
   - Soma: -1 + 2 = 1 < 4 → left++
   - left=2 (-1), right=5 (2)
   - Soma: -1 + 2 = 1 < 4 → left++
   - left=3 (0), right=5 (2)
   - Soma: 0 + 2 = 2 < 4 → left++
   - left=4 (1), right=5 (2)
   - Soma: 1 + 2 = 3 < 4 → left++
   - left >= right → sem solução para i=0

3. Fixa i=1 (valor -1):
   - Queremos: -(-1) = 1
   - Two pointers: left=2 (-1), right=5 (2)
   - Soma: -1 + 2 = 1 == 1 ✓ Encontrou! [-1, -1, 2]
   - Pula duplicatas e continua...
   - left=3 (0), right=4 (1)
   - Soma: 0 + 1 = 1 == 1 ✓ Encontrou! [-1, 0, 1]

4. Continua para i=2, 3, etc...

**Complexidade:** O(n²) tempo, O(1) espaço
`;

/**
 * 3Sum - Two Pointers Approach
 *
 * Estratégia:
 * 1. Ordena o array
 * 2. Para cada elemento nums[i], procura pares (j, k) tal que nums[j] + nums[k] = -nums[i]
 * 3. Usa two pointers: left = i+1, right = n-1
 * 4. Se soma < target: left++
 * 5. Se soma > target: right--
 * 6. Se soma == target: adiciona triplo e pula duplicatas
 */
export function solution(nums: number[]): number[][] {
    const result: number[][] = [];

    // Ordena o array para poder usar two pointers
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        // Pula duplicatas do primeiro elemento
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let left = i + 1;
        let right = nums.length - 1;
        const target = -nums[i]; // Queremos nums[left] + nums[right] = -nums[i]

        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                // Encontrou triplo!
                result.push([nums[i], nums[left], nums[right]]);

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

    return result;
}

