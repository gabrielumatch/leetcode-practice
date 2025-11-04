/**
 * Symmetric Tree
 * LeetCode #101
 */

import { createTree } from '../1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: createTree([1, 2, 2, 3, 4, 4, 3]),
        expected: true,
        label: 'Example 1 (symmetric)',
    },
    {
        input: createTree([1, 2, 2, null, 3, null, 3]),
        expected: false,
        label: 'Example 2 (not symmetric)',
    },
    {
        input: createTree([1]),
        expected: true,
        label: 'Single node',
    },
    {
        input: createTree([1, 2, 2, 3, null, null, 3]),
        expected: true,
        label: 'Symmetric with nulls',
    },
];

