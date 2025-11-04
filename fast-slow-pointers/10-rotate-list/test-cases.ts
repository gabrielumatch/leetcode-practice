/**
 * Rotate List
 * LeetCode #61
 */

export { ListNode, createList, listToArray } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    { input: { head: createList([1, 2, 3, 4, 5]), k: 2 }, expected: [4, 5, 1, 2, 3], label: 'Example 1' },
    { input: { head: createList([0, 1, 2]), k: 4 }, expected: [2, 0, 1], label: 'Example 2' },
];

