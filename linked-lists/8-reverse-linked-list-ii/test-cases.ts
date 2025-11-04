/**
 * Reverse Linked List II
 * LeetCode #92
 */

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    {
        input: {
            head: createList([1, 2, 3, 4, 5]),
            left: 2,
            right: 4,
        },
        expected: [1, 4, 3, 2, 5],
        label: 'Example 1',
    },
    {
        input: {
            head: createList([5]),
            left: 1,
            right: 1,
        },
        expected: [5],
        label: 'Example 2 (single node)',
    },
    {
        input: {
            head: createList([1, 2, 3]),
            left: 1,
            right: 3,
        },
        expected: [3, 2, 1],
        label: 'Reverse entire list',
    },
];

