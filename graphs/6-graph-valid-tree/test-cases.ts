/**
 * Graph Valid Tree
 * LeetCode #261
 */

export const testCases = [
    { input: { n: 5, edges: [[0, 1], [0, 2], [0, 3], [1, 4]] }, expected: true, label: 'Example 1 (valid tree)' },
    { input: { n: 5, edges: [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]] }, expected: false, label: 'Example 2 (has cycle)' },
];

