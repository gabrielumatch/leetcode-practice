/**
 * Kth Largest Element in an Array
 * LeetCode #215
 */

export const testCases = [
    {
        input: { nums: [3, 2, 1, 5, 6, 4], k: 2 },
        expected: 5,
        label: 'Example 1',
    },
    {
        input: { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4 },
        expected: 4,
        label: 'Example 2',
    },
    {
        input: { nums: [1], k: 1 },
        expected: 1,
        label: 'Single element',
    },
    {
        input: { nums: [5, 2, 4, 1, 3, 6, 0], k: 4 },
        expected: 3,
        label: 'K in middle',
    },
];

