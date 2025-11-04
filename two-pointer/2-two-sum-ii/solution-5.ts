export const description = `
**Based on Solution 2** - Ternary for pointer update

**Changes:**
- Replaced \`else if\` with ternary operator for pointer update
- Single-line conditional update reduces branching
- More compact, potentially better instruction cache

**Hypothesis:** Ternary might be optimized better by JIT compiler
`;

export function solution(input: { numbers: number[]; target: number }): number[] {
    const { numbers, target } = input;
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const leftVal = numbers[left];
        const rightVal = numbers[right];
        const sum = leftVal + rightVal;

        if (sum === target) {
            return [left + 1, right + 1];
        }

        // Ternary for single-expression pointer update
        sum < target ? left++ : right--;
    }

    return [];
}

