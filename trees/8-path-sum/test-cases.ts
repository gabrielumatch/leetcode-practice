/**
 * Path Sum
 * LeetCode #112
 */

import { createTree } from '../1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: {
            root: createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]),
            targetSum: 22,
        },
        expected: true,
        label: 'Example 1 (has path)',
    },
    {
        input: {
            root: createTree([1, 2, 3]),
            targetSum: 5,
        },
        expected: false,
        label: 'Example 2 (no path)',
    },
    {
        input: {
            root: createTree([]),
            targetSum: 0,
        },
        expected: false,
        label: 'Empty tree',
    },
    {
        input: {
            root: createTree([1, 2]),
            targetSum: 1,
        },
        expected: false,
        label: 'Non-leaf node equals target',
    },
];

