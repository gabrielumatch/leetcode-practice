/**
 * Asteroid Collision
 * LeetCode #735
 */

export const testCases = [
    {
        input: [5, 10, -5],
        expected: [5, 10],
        label: 'Example 1',
    },
    {
        input: [8, -8],
        expected: [],
        label: 'Example 2 (both explode)',
    },
    {
        input: [10, 2, -5],
        expected: [10],
        label: 'Example 3 (chain collision)',
    },
    {
        input: [-2, -1, 1, 2],
        expected: [-2, -1, 1, 2],
        label: 'No collision',
    },
];

