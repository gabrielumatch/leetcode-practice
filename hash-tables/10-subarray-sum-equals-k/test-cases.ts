/**
 * Subarray Sum Equals K
 * LeetCode #560
 */

export const testCases = [
    {
        input: { nums: [1, 1, 1], k: 2 },
        expected: 2,
        label: 'Example 1',
    },
    {
        input: { nums: [1, 2, 3], k: 3 },
        expected: 2,
        label: 'Example 2',
    },
    {
        input: { nums: [1], k: 0 },
        expected: 0,
        label: 'No match',
    },
    {
        input: { nums: [1, -1, 0], k: 0 },
        expected: 3,
        label: 'Zero sum subarrays',
    },
];

