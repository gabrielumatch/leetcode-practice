/**
 * Swap Nodes in Pairs
 * LeetCode #24
 */

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    {
        input: createList([1, 2, 3, 4]),
        expected: [2, 1, 4, 3],
        label: 'Example 1',
    },
    {
        input: createList([]),
        expected: [],
        label: 'Example 2 (empty)',
    },
    {
        input: createList([1]),
        expected: [1],
        label: 'Example 3 (single)',
    },
    {
        input: createList([1, 2, 3]),
        expected: [2, 1, 3],
        label: 'Odd length',
    },
];

