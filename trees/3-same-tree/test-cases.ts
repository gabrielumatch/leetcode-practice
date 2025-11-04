/**
 * Same Tree
 * LeetCode #100
 */

import { createTree } from '../1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: {
            p: createTree([1, 2, 3]),
            q: createTree([1, 2, 3]),
        },
        expected: true,
        label: 'Example 1 (same)',
    },
    {
        input: {
            p: createTree([1, 2]),
            q: createTree([1, null, 2]),
        },
        expected: false,
        label: 'Example 2 (different structure)',
    },
    {
        input: {
            p: createTree([1, 2, 1]),
            q: createTree([1, 1, 2]),
        },
        expected: false,
        label: 'Example 3 (different values)',
    },
    {
        input: {
            p: createTree([]),
            q: createTree([]),
        },
        expected: true,
        label: 'Both empty',
    },
];

