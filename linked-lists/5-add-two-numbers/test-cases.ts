/**
 * Add Two Numbers
 * LeetCode #2
 */

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    {
        input: {
            l1: createList([2, 4, 3]),
            l2: createList([5, 6, 4]),
        },
        expected: [7, 0, 8],
        label: 'Example 1 (342 + 465 = 807)',
    },
    {
        input: {
            l1: createList([0]),
            l2: createList([0]),
        },
        expected: [0],
        label: 'Example 2 (both zero)',
    },
    {
        input: {
            l1: createList([9, 9, 9, 9, 9, 9, 9]),
            l2: createList([9, 9, 9, 9]),
        },
        expected: [8, 9, 9, 9, 0, 0, 0, 1],
        label: 'Example 3 (with carry)',
    },
];

