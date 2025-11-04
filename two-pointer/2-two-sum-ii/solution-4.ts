export const description = `
**Based on Solution 2** - Eliminate destructuring overhead

**Changes:**
- Removed \`const { numbers, target } = input;\` destructuring
- Access \`input.numbers\` and \`input.target\` directly
- One less object destructuring operation
- Slightly less memory allocation at function start

**Expected gain:** ~5-8% (reduce function setup cost)
`;

export function solution(input: { numbers: number[]; target: number }): number[] {
    let left = 0;
    let right = input.numbers.length - 1;

    while (left < right) {
        const leftVal = input.numbers[left];
        const rightVal = input.numbers[right];
        const sum = leftVal + rightVal;

        if (sum === input.target) {
            return [left + 1, right + 1];
        } else if (sum < input.target) {
            left++;
        } else {
            right--;
        }
    }

    return [];
}

