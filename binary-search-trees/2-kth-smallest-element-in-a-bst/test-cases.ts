/**
 * Kth Smallest Element in a BST
 * LeetCode #230
 */

export { TreeNode, createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    { input: { root: createTree([3, 1, 4, null, 2]), k: 1 }, expected: 1, label: 'Example 1' },
    { input: { root: createTree([5, 3, 6, 2, 4, null, null, 1]), k: 3 }, expected: 3, label: 'Example 2' },
];

