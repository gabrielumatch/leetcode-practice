export const description = `
**Based on Solution 2** - Eliminate intermediate sum variable

**Changes:**
- Removed \`sum\` variable, compare \`leftVal + rightVal\` directly inline
- One less variable allocation per iteration
- Slightly less memory pressure

**Expected gain:** ~3-5% (micro-optimization)
`;

export function solution(input: { numbers: number[]; target: number }): number[] {
    const { numbers, target } = input;
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const leftVal = numbers[left];
        const rightVal = numbers[right];

        // Direct comparison without intermediate sum variable
        if (leftVal + rightVal === target) {
            return [left + 1, right + 1];
        } else if (leftVal + rightVal < target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

