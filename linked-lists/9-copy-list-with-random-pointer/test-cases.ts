/**
 * Copy List with Random Pointer
 * LeetCode #138
 */

// Node with random pointer
export class Node {
    val: number;
    next: Node | null;
    random: Node | null;
    constructor(val?: number, next?: Node | null, random?: Node | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
        this.random = random === undefined ? null : random;
    }
}

// Helper to create list with random pointers
export function createListWithRandom(arr: [number, number | null][]): Node | null {
    if (arr.length === 0) return null;

    const nodes: Node[] = arr.map(([val]) => new Node(val));

    for (let i = 0; i < nodes.length; i++) {
        if (i < nodes.length - 1) {
            nodes[i].next = nodes[i + 1];
        }
        const randomIdx = arr[i][1];
        if (randomIdx !== null) {
            nodes[i].random = nodes[randomIdx];
        }
    }

    return nodes[0];
}

// Helper to convert to array format
export function listWithRandomToArray(head: Node | null): [number, number | null][] {
    if (!head) return [];

    const nodes: Node[] = [];
    const nodeMap = new Map<Node, number>();
    let current: Node | null = head;
    let idx = 0;

    while (current) {
        nodes.push(current);
        nodeMap.set(current, idx++);
        current = current.next;
    }

    return nodes.map(node => [
        node.val,
        node.random ? nodeMap.get(node.random) ?? null : null,
    ]);
}

export const testCases = [
    {
        input: createListWithRandom([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]]),
        expected: [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]],
        label: 'Example 1',
    },
    {
        input: createListWithRandom([[1, 1], [2, 1]]),
        expected: [[1, 1], [2, 1]],
        label: 'Example 2',
    },
    {
        input: createListWithRandom([[3, null], [3, 0], [3, null]]),
        expected: [[3, null], [3, 0], [3, null]],
        label: 'Example 3',
    },
];

