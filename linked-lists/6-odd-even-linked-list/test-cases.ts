/**
 * Odd Even Linked List
 * LeetCode #328
 */

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    {
        input: createList([1, 2, 3, 4, 5]),
        expected: [1, 3, 5, 2, 4],
        label: 'Example 1',
    },
    {
        input: createList([2, 1, 3, 5, 6, 4, 7]),
        expected: [2, 3, 6, 7, 1, 5, 4],
        label: 'Example 2',
    },
    {
        input: createList([1]),
        expected: [1],
        label: 'Single node',
    },
    {
        input: createList([1, 2]),
        expected: [1, 2],
        label: 'Two nodes',
    },
];

