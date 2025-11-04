/**
 * Next Greater Element I
 * LeetCode #496
 */

export const testCases = [
    {
        input: { nums1: [4, 1, 2], nums2: [1, 3, 4, 2] },
        expected: [-1, 3, -1],
        label: 'Example 1',
    },
    {
        input: { nums1: [2, 4], nums2: [1, 2, 3, 4] },
        expected: [3, -1],
        label: 'Example 2',
    },
    {
        input: { nums1: [1, 3, 5, 2, 4], nums2: [5, 4, 3, 2, 1] },
        expected: [-1, -1, -1, -1, -1],
        label: 'Descending nums2',
    },
];

