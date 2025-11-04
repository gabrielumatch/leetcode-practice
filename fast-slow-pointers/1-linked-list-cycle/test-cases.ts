/**
 * Linked List Cycle
 * LeetCode #141
 */

export { ListNode, createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    { input: { head: createList([3, 2, 0, -4]), pos: 1 }, expected: true, label: 'Example 1 (has cycle)' },
    { input: { head: createList([1, 2]), pos: 0 }, expected: true, label: 'Example 2 (has cycle)' },
    { input: { head: createList([1]), pos: -1 }, expected: false, label: 'Example 3 (no cycle)' },
];

