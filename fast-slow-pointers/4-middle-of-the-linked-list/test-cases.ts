/**
 * Middle of the Linked List
 * LeetCode #876
 */

export { ListNode, createList, listToArray } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    { input: createList([1, 2, 3, 4, 5]), expected: [3, 4, 5], label: 'Example 1 (odd length)' },
    { input: createList([1, 2, 3, 4, 5, 6]), expected: [4, 5, 6], label: 'Example 2 (even length)' },
];

