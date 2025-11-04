export const description = `
**Binary Search approach** - Different algorithm

**Changes:**
- For each element, binary search for the complement
- O(n log n) complexity vs O(n) for two pointers
- Better cache locality for very large arrays (theory)

**Hypothesis:** Will likely be slower, but testing algorithmic approach
`;

export function solution(input: { numbers: number[]; target: number }): number[] {
    const { numbers, target } = input;

    for (let i = 0; i < numbers.length - 1; i++) {
        const complement = target - numbers[i];

        // Binary search for complement in [i+1, n-1]
        let left = i + 1;
        let right = numbers.length - 1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            const midVal = numbers[mid];

            if (midVal === complement) {
                return [i + 1, mid + 1];
            } else if (midVal < complement) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return [];
}

