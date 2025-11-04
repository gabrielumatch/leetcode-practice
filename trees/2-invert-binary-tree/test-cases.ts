/**
 * Invert Binary Tree
 * LeetCode #226
 */

export { TreeNode, createTree } from '../1-maximum-depth-of-binary-tree/test-cases';

// Helper to convert tree to array (level-order)
export function treeToArray(root: TreeNode | null): (number | null)[] {
    if (!root) return [];
    const result: (number | null)[] = [];
    const queue: (TreeNode | null)[] = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push(null);
        }
    }

    // Remove trailing nulls
    while (result.length > 0 && result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

import { createTree, TreeNode } from '../1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: createTree([4, 2, 7, 1, 3, 6, 9]),
        expected: [4, 7, 2, 9, 6, 3, 1],
        label: 'Example 1',
    },
    {
        input: createTree([2, 1, 3]),
        expected: [2, 3, 1],
        label: 'Example 2',
    },
    {
        input: createTree([]),
        expected: [],
        label: 'Empty tree',
    },
    {
        input: createTree([1]),
        expected: [1],
        label: 'Single node',
    },
];

