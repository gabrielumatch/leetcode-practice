/**
 * Trapping Rain Water
 * LeetCode #42
 */

export const testCases = [
    {
        input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
        expected: 6,
        label: 'Example 1',
    },
    {
        input: [4, 2, 0, 3, 2, 5],
        expected: 9,
        label: 'Example 2',
    },
    {
        input: [3, 0, 2, 0, 4],
        expected: 7,
        label: 'Multiple valleys',
    },
    {
        input: [5, 4, 3, 2, 1],
        expected: 0,
        label: 'Descending (no water)',
    },
];

