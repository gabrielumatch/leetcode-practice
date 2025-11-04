/**
 * Diameter of Binary Tree
 * LeetCode #543
 */

import { createTree } from '../1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: createTree([1, 2, 3, 4, 5]),
        expected: 3,
        label: 'Example 1',
    },
    {
        input: createTree([1, 2]),
        expected: 1,
        label: 'Example 2',
    },
    {
        input: createTree([1]),
        expected: 0,
        label: 'Single node',
    },
    {
        input: createTree([1, 2, 3, 4, 5, null, null, 6]),
        expected: 4,
        label: 'Longer path',
    },
];

