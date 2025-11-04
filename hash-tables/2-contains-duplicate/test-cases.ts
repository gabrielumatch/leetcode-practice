/**
 * Contains Duplicate
 * LeetCode #217
 */

export const testCases = [
    {
        input: [1, 2, 3, 1],
        expected: true,
        label: 'Example 1 (has duplicate)',
    },
    {
        input: [1, 2, 3, 4],
        expected: false,
        label: 'Example 2 (no duplicate)',
    },
    {
        input: [1, 1, 1, 3, 3, 4, 3, 2, 4, 2],
        expected: true,
        label: 'Example 3 (many duplicates)',
    },
    {
        input: [1],
        expected: false,
        label: 'Single element',
    },
];

