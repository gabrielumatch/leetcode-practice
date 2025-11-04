/**
 * Linked List Cycle II
 * LeetCode #142
 */

export { ListNode, createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    { input: { head: createList([3, 2, 0, -4]), pos: 1 }, expected: 1, label: 'Example 1' },
    { input: { head: createList([1, 2]), pos: 0 }, expected: 0, label: 'Example 2' },
    { input: { head: createList([1]), pos: -1 }, expected: null, label: 'Example 3 (no cycle)' },
];

