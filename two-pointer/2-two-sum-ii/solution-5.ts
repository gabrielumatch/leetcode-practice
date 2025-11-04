export const description = `
**Based on Solution 2** - Eliminate else-if branching

**Changes:**
- Replaced \`else if\` with early \`continue\` statements
- Reduces branch prediction complexity
- Slightly more explicit control flow

**Expected gain:** ~3-5% (simpler branching)
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
        
        if (sum < target) {
            left++;
            continue;
        }
        
        right--;
    }

    return [];
}

