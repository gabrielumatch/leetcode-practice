/**
 * Sliding Window Maximum
 * LeetCode #239
 */

export const testCases = [
    {
        input: { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3 },
        expected: [3, 3, 5, 5, 6, 7],
        label: 'Example 1',
    },
    {
        input: { nums: [1], k: 1 },
        expected: [1],
        label: 'Example 2 (single element)',
    },
    {
        input: { nums: [9, 11], k: 2 },
        expected: [11],
        label: 'K equals length',
    },
    {
        input: { nums: [1, -1], k: 1 },
        expected: [1, -1],
        label: 'K=1 (all elements)',
    },
];

