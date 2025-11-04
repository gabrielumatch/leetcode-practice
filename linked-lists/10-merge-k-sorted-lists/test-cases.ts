/**
 * Merge k Sorted Lists
 * LeetCode #23
 */

export { ListNode, createList, listToArray } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    {
        input: [
            createList([1, 4, 5]),
            createList([1, 3, 4]),
            createList([2, 6]),
        ],
        expected: [1, 1, 2, 3, 4, 4, 5, 6],
        label: 'Example 1',
    },
    {
        input: [],
        expected: [],
        label: 'Example 2 (empty array)',
    },
    {
        input: [createList([])],
        expected: [],
        label: 'Example 3 (array with empty list)',
    },
    {
        input: [createList([1, 2]), createList([3, 4])],
        expected: [1, 2, 3, 4],
        label: 'Two sorted lists',
    },
];

