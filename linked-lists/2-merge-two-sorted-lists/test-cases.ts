/**
 * Merge Two Sorted Lists
 * LeetCode #21
 */

import { createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

export const testCases = [
    {
        input: {
            list1: createList([1, 2, 4]),
            list2: createList([1, 3, 4]),
        },
        expected: [1, 1, 2, 3, 4, 4],
        label: 'Example 1',
    },
    {
        input: {
            list1: createList([]),
            list2: createList([]),
        },
        expected: [],
        label: 'Example 2 (both empty)',
    },
    {
        input: {
            list1: createList([]),
            list2: createList([0]),
        },
        expected: [0],
        label: 'Example 3 (one empty)',
    },
    {
        input: {
            list1: createList([1, 3, 5]),
            list2: createList([2, 4, 6]),
        },
        expected: [1, 2, 3, 4, 5, 6],
        label: 'Interleaved',
    },
];

