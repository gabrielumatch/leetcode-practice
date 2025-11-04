/**
 * Binary Tree Zigzag Level Order Traversal
 * LeetCode #103
 */

import { createTree } from '../1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: createTree([3, 9, 20, null, null, 15, 7]),
        expected: [[3], [20, 9], [15, 7]],
        label: 'Example 1',
    },
    {
        input: createTree([1]),
        expected: [[1]],
        label: 'Example 2 (single node)',
    },
    {
        input: createTree([]),
        expected: [],
        label: 'Empty tree',
    },
    {
        input: createTree([1, 2, 3, 4, 5, 6, 7]),
        expected: [[1], [3, 2], [4, 5, 6, 7]],
        label: 'Full tree',
    },
];

