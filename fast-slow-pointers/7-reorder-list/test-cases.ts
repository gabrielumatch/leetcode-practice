/**
 * Reorder List
 * LeetCode #143
 */

export { ListNode, createList, listToArray } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    { input: createList([1, 2, 3, 4]), expected: [1, 4, 2, 3], label: 'Example 1' },
    { input: createList([1, 2, 3, 4, 5]), expected: [1, 5, 2, 4, 3], label: 'Example 2' },
];

