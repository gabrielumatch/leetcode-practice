/**
 * Binary Tree Right Side View
 * LeetCode #199
 */

import { createTree } from '../1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: createTree([1, 2, 3, null, 5, null, 4]),
        expected: [1, 3, 4],
        label: 'Example 1',
    },
    {
        input: createTree([1, null, 3]),
        expected: [1, 3],
        label: 'Example 2',
    },
    {
        input: createTree([]),
        expected: [],
        label: 'Empty tree',
    },
    {
        input: createTree([1, 2]),
        expected: [1, 2],
        label: 'Only left child',
    },
];

