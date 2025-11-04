/**
 * Palindrome Linked List
 * LeetCode #234
 */

export { ListNode, createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    { input: createList([1, 2, 2, 1]), expected: true, label: 'Example 1 (palindrome)' },
    { input: createList([1, 2]), expected: false, label: 'Example 2 (not palindrome)' },
];

