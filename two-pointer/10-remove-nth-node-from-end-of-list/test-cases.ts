/**
 * Remove Nth Node From End of List
 * LeetCode #19
 */

// ListNode helper for linked list
export class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

// Helper to create linked list from array
export function createList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper to convert linked list to array (needed by solutions)
export function listToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

export const testCases = [
    {
        input: { head: createList([1, 2, 3, 4, 5]), n: 2 },
        expected: [1, 2, 3, 5],
        label: 'Example 1',
    },
    {
        input: { head: createList([1]), n: 1 },
        expected: [],
        label: 'Example 2 (single node)',
    },
    {
        input: { head: createList([1, 2]), n: 1 },
        expected: [1],
        label: 'Example 3 (remove last)',
    },
    {
        input: { head: createList([1, 2]), n: 2 },
        expected: [2],
        label: 'Remove first',
    },
];

