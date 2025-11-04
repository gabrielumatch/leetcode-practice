/**
 * Lowest Common Ancestor of a Binary Tree
 * LeetCode #236
 */

import { TreeNode, createTree } from '../1-maximum-depth-of-binary-tree/test-cases';

// Helper to find node by value
function findNode(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}

export const testCases = [
    {
        input: (() => {
            const root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
            return { root, p: findNode(root, 5), q: findNode(root, 1) };
        })(),
        expected: 3,
        label: 'Example 1',
    },
    {
        input: (() => {
            const root = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4]);
            return { root, p: findNode(root, 5), q: findNode(root, 4) };
        })(),
        expected: 5,
        label: 'Example 2 (LCA is one of nodes)',
    },
    {
        input: (() => {
            const root = createTree([1, 2]);
            return { root, p: findNode(root, 1), q: findNode(root, 2) };
        })(),
        expected: 1,
        label: 'Example 3',
    },
];

