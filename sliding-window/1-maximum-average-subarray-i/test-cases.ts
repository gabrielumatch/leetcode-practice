/**
 * Maximum Average Subarray I
 * LeetCode #643
 */

export const testCases = [
    {
        input: { nums: [1, 12, -5, -6, 50, 3], k: 4 },
        expected: 12.75,
        label: 'Example 1',
    },
    {
        input: { nums: [5], k: 1 },
        expected: 5.0,
        label: 'Example 2 (single element)',
    },
    {
        input: { nums: [0, 4, 0, 3, 2], k: 1 },
        expected: 4.0,
        label: 'K=1 (max element)',
    },
    {
        input: { nums: [-1, -12, -5, -6, -50, -3], k: 3 },
        expected: -4.0,
        label: 'All negative',
    },
];

