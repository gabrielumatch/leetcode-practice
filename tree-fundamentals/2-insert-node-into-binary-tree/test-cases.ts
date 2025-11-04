/**
 * Insert Node into Binary Tree
 * Fundamental Operation
 */

export { TreeNode } from '../1-create-binary-tree-node/test-cases';
import { TreeNode } from '../1-create-binary-tree-node/test-cases';
import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

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

export { createTree };

export const testCases = [
    {
        input: { root: createTree([1, 2, 3]), val: 4 },
        expected: [1, 2, 3, 4],
        label: 'Example 1',
    },
    {
        input: { root: createTree([1, 2]), val: 3 },
        expected: [1, 2, 3],
        label: 'Example 2',
    },
    {
        input: { root: null, val: 1 },
        expected: [1],
        label: 'Empty tree',
    },
    {
        input: { root: createTree([1]), val: 2 },
        expected: [1, 2],
        label: 'Single node',
    },
    {
        input: { root: createTree([1, 2, 3, 4, 5]), val: 6 },
        expected: [1, 2, 3, 4, 5, 6],
        label: 'Example 3',
    },
];

