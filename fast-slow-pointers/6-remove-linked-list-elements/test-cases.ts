/**
 * Remove Linked List Elements
 * LeetCode #203
 */

export { ListNode, createList, listToArray } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    { input: { head: createList([1, 2, 6, 3, 4, 5, 6]), val: 6 }, expected: [1, 2, 3, 4, 5], label: 'Example 1' },
    { input: { head: createList([]), val: 1 }, expected: [], label: 'Example 2 (empty)' },
    { input: { head: createList([7, 7, 7, 7]), val: 7 }, expected: [], label: 'Example 3 (all removed)' },
];

