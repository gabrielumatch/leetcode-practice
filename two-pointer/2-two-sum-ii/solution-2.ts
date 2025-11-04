export const description = `
**Based on Solution 1** - Cache array values

**Changes:**
- Cache \`numbers[left]\` and \`numbers[right]\` to avoid repeated array access
- Each iteration accesses array twice instead of multiple times
- Reduces memory dereference overhead

**Expected gain:** ~5-10% (micro-optimization)
`;

export function solution(input: { numbers: number[]; target: number }): number[] {
    const { numbers, target } = input;
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        // Cache array values to avoid repeated access
        const leftVal = numbers[left];
        const rightVal = numbers[right];
        const sum = leftVal + rightVal;

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

