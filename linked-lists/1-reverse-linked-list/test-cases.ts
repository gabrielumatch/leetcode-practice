/**
 * Reverse Linked List
 * LeetCode #206
 */

export {
    ListNode,
    createList,
    listToArray,
} from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    {
        input: createList([1, 2, 3, 4, 5]),
        expected: [5, 4, 3, 2, 1],
        label: 'Example 1',
    },
    {
        input: createList([1, 2]),
        expected: [2, 1],
        label: 'Example 2',
    },
    {
        input: createList([]),
        expected: [],
        label: 'Empty list',
    },
    {
        input: createList([1]),
        expected: [1],
        label: 'Single node',
    },
];

