/**
 * 4Sum
 * LeetCode #18
 */

export const testCases = [
    {
        input: { nums: [1, 0, -1, 0, -2, 2], target: 0 },
        expected: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]],
        label: 'Example 1',
    },
    {
        input: { nums: [2, 2, 2, 2, 2], target: 8 },
        expected: [[2, 2, 2, 2]],
        label: 'Example 2 (all same)',
    },
    {
        input: { nums: [1000000000, 1000000000, 1000000000, 1000000000], target: -294967296 },
        expected: [],
        label: 'Large numbers overflow',
    },
    {
        input: { nums: [-1, 0, 1, 2, -1, -4], target: -1 },
        expected: [[-4, 0, 1, 2], [-1, -1, 0, 1]],
        label: 'Negative target',
    },
];

