export const description = `
**Two Pointers - Basic approach**

The most straightforward solution for a sorted array:
- Start with two pointers: one at the beginning (\`left\`), one at the end (\`right\`)
- Calculate sum of elements at both pointers
- If sum equals target, return indices (1-indexed)
- If sum is too small, move left pointer right (increase sum)
- If sum is too large, move right pointer left (decrease sum)

**Time:** O(n) - single pass  
**Space:** O(1) - only two pointers
`;

export function solution(input: { numbers: number[]; target: number }): number[] {
    const { numbers, target } = input;
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            // Return 1-indexed positions
            return [left + 1, right + 1];
        } else if (sum < target) {
            // Sum too small, need larger number
            left++;
        } else {
            // Sum too large, need smaller number
            right--;
        }
    }

    // Should never reach here given problem constraints
    return [];
}

