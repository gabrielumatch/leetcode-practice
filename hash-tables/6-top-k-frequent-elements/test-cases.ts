/**
 * Top K Frequent Elements
 * LeetCode #347
 */

export const testCases = [
    {
        input: { nums: [1, 1, 1, 2, 2, 3], k: 2 },
        expected: [1, 2],
        label: 'Example 1',
    },
    {
        input: { nums: [1], k: 1 },
        expected: [1],
        label: 'Example 2 (single element)',
    },
    {
        input: { nums: [4, 1, -1, 2, -1, 2, 3], k: 2 },
        expected: [-1, 2],
        label: 'Mixed positive/negative',
    },
    {
        input: { nums: [1, 2], k: 2 },
        expected: [1, 2],
        label: 'K equals array length',
    },
];

