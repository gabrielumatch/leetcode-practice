/**
 * Longest Consecutive Sequence
 * LeetCode #128
 */

export const testCases = [
    {
        input: [100, 4, 200, 1, 3, 2],
        expected: 4,
        label: 'Example 1 ([1,2,3,4])',
    },
    {
        input: [0, 3, 7, 2, 5, 8, 4, 6, 0, 1],
        expected: 9,
        label: 'Example 2 ([0-8])',
    },
    {
        input: [9, 1, 4, 7, 3, 2, 8, 5, 6],
        expected: 9,
        label: 'Full consecutive',
    },
    {
        input: [1, 2, 0, 1],
        expected: 3,
        label: 'With duplicates',
    },
];

