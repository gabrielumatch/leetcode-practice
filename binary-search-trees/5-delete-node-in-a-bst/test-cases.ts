/**
 * Delete Node in a BST
 * LeetCode #450
 */

export { TreeNode, createTree, treeToArray } from '../../trees/2-invert-binary-tree/test-cases';

import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    { input: { root: createTree([5, 3, 6, 2, 4, null, 7]), key: 3 }, expected: [5, 4, 6, 2, null, null, 7], label: 'Example 1' },
    { input: { root: createTree([5, 3, 6, 2, 4, null, 7]), key: 0 }, expected: [5, 3, 6, 2, 4, null, 7], label: 'Example 2 (key not found)' },
    { input: { root: createTree([]), key: 0 }, expected: [], label: 'Example 3 (empty tree)' },
];

