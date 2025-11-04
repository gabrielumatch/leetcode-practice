/**
 * Move Zeroes
 * LeetCode #283
 */

export const testCases = [
    {
        input: [0, 1, 0, 3, 12],
        expected: [1, 3, 12, 0, 0],
        label: 'Example 1',
    },
    {
        input: [0],
        expected: [0],
        label: 'Example 2 (single zero)',
    },
    {
        input: [1, 2, 3],
        expected: [1, 2, 3],
        label: 'No zeroes',
    },
    {
        input: [0, 0, 1],
        expected: [1, 0, 0],
        label: 'Multiple zeroes at start',
    },
];

