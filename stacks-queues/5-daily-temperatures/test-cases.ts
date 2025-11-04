/**
 * Daily Temperatures
 * LeetCode #739
 */

export const testCases = [
    {
        input: [73, 74, 75, 71, 69, 72, 76, 73],
        expected: [1, 1, 4, 2, 1, 1, 0, 0],
        label: 'Example 1',
    },
    {
        input: [30, 40, 50, 60],
        expected: [1, 1, 1, 0],
        label: 'Example 2 (ascending)',
    },
    {
        input: [30, 60, 90],
        expected: [1, 1, 0],
        label: 'Example 3',
    },
    {
        input: [90, 80, 70],
        expected: [0, 0, 0],
        label: 'Descending (no warmer days)',
    },
];

