export const description = `
**Recursive kSum - Generalization**

Abordagem recursiva que generaliza para kSum.
Reduz o problema: 4Sum → 3Sum → 2Sum (two pointers).

**Complexidade:** O(n³) tempo, O(k) espaço (recursão)
`;

/**
 * 4Sum - Recursive kSum Approach
 *
 * Generaliza para qualquer k: 4Sum chama 3Sum, que chama 2Sum
 */
export function solution(input: { nums: number[]; target: number }): number[][] {
    const { nums, target } = input;

    if (nums.length < 4) return [];

    nums.sort((a, b) => a - b);

    function kSum(start: number, k: number, target: number): number[][] {
        const result: number[][] = [];

        if (k === 2) {
            // Two pointers para 2Sum
            let left = start;
            let right = nums.length - 1;

            while (left < right) {
                const sum = nums[left] + nums[right];

                if (sum < target) {
                    left++;
                } else if (sum > target) {
                    right--;
                } else {
                    result.push([nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                }
            }
        } else {
            // Para k > 2, recursivamente reduz para k-1
            for (let i = start; i < nums.length - k + 1; i++) {
                if (i > start && nums[i] === nums[i - 1]) continue;

                const subResults = kSum(i + 1, k - 1, target - nums[i]);

                for (const subResult of subResults) {
                    result.push([nums[i], ...subResult]);
                }
            }
        }

        return result;
    }

    return kSum(0, 4, target);
}

