/**
 * Remove Duplicates from Sorted Array
 * LeetCode #26
 */

export const testCases = [
    {
        input: [1, 1, 2],
        expected: 2,
        label: 'Example 1',
    },
    {
        input: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
        expected: 5,
        label: 'Example 2',
    },
    {
        input: [1],
        expected: 1,
        label: 'Single element',
    },
    {
        input: [1, 1, 1, 1],
        expected: 1,
        label: 'All duplicates',
    },
];

