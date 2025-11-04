/**
 * Lowest Common Ancestor of a BST
 * LeetCode #235
 */

export { TreeNode, createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    { input: { root: createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), p: 2, q: 8 }, expected: 6, label: 'Example 1' },
    { input: { root: createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]), p: 2, q: 4 }, expected: 2, label: 'Example 2' },
];

