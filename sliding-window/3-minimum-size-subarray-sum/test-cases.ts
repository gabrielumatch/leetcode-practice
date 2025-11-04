/**
 * Minimum Size Subarray Sum
 * LeetCode #209
 */

export const testCases = [
    {
        input: { target: 7, nums: [2, 3, 1, 2, 4, 3] },
        expected: 2,
        label: 'Example 1 ([4,3])',
    },
    {
        input: { target: 4, nums: [1, 4, 4] },
        expected: 1,
        label: 'Example 2 (single)',
    },
    {
        input: { target: 11, nums: [1, 1, 1, 1, 1, 1, 1, 1] },
        expected: 0,
        label: 'Example 3 (impossible)',
    },
    {
        input: { target: 15, nums: [1, 2, 3, 4, 5] },
        expected: 5,
        label: 'Entire array',
    },
];

