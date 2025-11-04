/**
 * Sort Colors
 * LeetCode #75
 */

export const testCases = [
    {
        input: [2, 0, 2, 1, 1, 0],
        expected: [0, 0, 1, 1, 2, 2],
        label: 'Example 1',
    },
    {
        input: [2, 0, 1],
        expected: [0, 1, 2],
        label: 'Example 2',
    },
    {
        input: [0],
        expected: [0],
        label: 'Single element',
    },
    {
        input: [2, 2, 2, 0, 0, 1, 1],
        expected: [0, 0, 1, 1, 2, 2, 2],
        label: 'Multiple of each',
    },
];

