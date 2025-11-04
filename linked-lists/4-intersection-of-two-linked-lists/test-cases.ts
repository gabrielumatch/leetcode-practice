/**
 * Intersection of Two Linked Lists
 * LeetCode #160
 */

import { ListNode, createList } from '../../two-pointer/10-remove-nth-node-from-end-of-list/test-cases';

// Helper to create intersecting lists
function createIntersectingLists(
    listA: number[],
    listB: number[],
    skipA: number,
    skipB: number,
    intersectVal: number | null
): { headA: ListNode | null; headB: ListNode | null; intersectNode: ListNode | null } {
    if (intersectVal === null) {
        return {
            headA: createList(listA),
            headB: createList(listB),
            intersectNode: null,
        };
    }

    // Create the lists
    const headA = createList(listA);
    const headB = createList(listB);

    // Find the intersection node in listA
    let currentA = headA;
    for (let i = 0; i < skipA && currentA; i++) {
        currentA = currentA.next;
    }

    // Find the node before intersection in listB
    let currentB = headB;
    for (let i = 0; i < skipB - 1 && currentB; i++) {
        currentB = currentB.next;
    }

    // Connect listB to the intersection point
    if (currentB && currentA) {
        currentB.next = currentA;
    }

    return { headA, headB, intersectNode: currentA };
}

export const testCases = [
    {
        input: createIntersectingLists([4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5], 2, 3, 8),
        expected: 8,
        label: 'Example 1 (intersect at 8)',
    },
    {
        input: createIntersectingLists([1, 9, 1, 2, 4], [3, 2, 4], 3, 1, 2),
        expected: 2,
        label: 'Example 2 (intersect at 2)',
    },
    {
        input: createIntersectingLists([2, 6, 4], [1, 5], 3, 2, null),
        expected: null,
        label: 'Example 3 (no intersection)',
    },
];

