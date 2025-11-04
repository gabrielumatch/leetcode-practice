/**
 * Remove Duplicates from Sorted List
 * LeetCode #83
 */

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    {
        input: createList([1, 1, 2]),
        expected: [1, 2],
        label: 'Example 1',
    },
    {
        input: createList([1, 1, 2, 3, 3]),
        expected: [1, 2, 3],
        label: 'Example 2',
    },
    {
        input: createList([1, 1, 1]),
        expected: [1],
        label: 'All duplicates',
    },
    {
        input: createList([]),
        expected: [],
        label: 'Empty list',
    },
];

