/**
 * Maximum Depth of Binary Tree
 * LeetCode #104
 */

// TreeNode helper
export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

// Helper to create tree from array (level-order)
export function createTree(arr: (number | null)[]): TreeNode | null {
    if (arr.length === 0 || arr[0] === null) return null;

    const root = new TreeNode(arr[0]);
    const queue: TreeNode[] = [root];
    let i = 1;

    while (queue.length > 0 && i < arr.length) {
        const node = queue.shift()!;

        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]!);
            queue.push(node.left);
        }
        i++;

        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]!);
            queue.push(node.right);
        }
        i++;
    }

    return root;
}

export const testCases = [
    {
        input: createTree([3, 9, 20, null, null, 15, 7]),
        expected: 3,
        label: 'Example 1',
    },
    {
        input: createTree([1, null, 2]),
        expected: 2,
        label: 'Example 2',
    },
    {
        input: createTree([]),
        expected: 0,
        label: 'Empty tree',
    },
    {
        input: createTree([1]),
        expected: 1,
        label: 'Single node',
    },
];

