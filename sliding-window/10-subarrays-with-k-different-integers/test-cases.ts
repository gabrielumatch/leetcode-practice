/**
 * Subarrays with K Different Integers
 * LeetCode #992
 */

export const testCases = [
    {
        input: { nums: [1, 2, 1, 2, 3], k: 2 },
        expected: 7,
        label: 'Example 1',
    },
    {
        input: { nums: [1, 2, 1, 3, 4], k: 3 },
        expected: 3,
        label: 'Example 2',
    },
    {
        input: { nums: [1, 1, 1, 1, 1], k: 1 },
        expected: 15,
        label: 'All same',
    },
    {
        input: { nums: [1, 2, 3, 4, 5], k: 5 },
        expected: 1,
        label: 'K equals length',
    },
];

