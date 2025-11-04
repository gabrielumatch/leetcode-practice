/**
 * Product of Array Except Self
 * LeetCode #238
 */

export const testCases = [
    {
        input: [1, 2, 3, 4],
        expected: [24, 12, 8, 6],
        label: 'Example 1',
    },
    {
        input: [-1, 1, 0, -3, 3],
        expected: [0, 0, 9, 0, 0],
        label: 'Example 2 (with zero)',
    },
    {
        input: [2, 3, 4, 5],
        expected: [60, 40, 30, 24],
        label: 'All positive',
    },
    {
        input: [-1, -2, -3, -4],
        expected: [-24, -12, -8, -6],
        label: 'All negative',
    },
];

