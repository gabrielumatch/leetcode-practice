/**
 * Two Sum IV - Input is a BST
 * LeetCode #653
 */

export { TreeNode, createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    { input: { root: createTree([5, 3, 6, 2, 4, null, 7]), k: 9 }, expected: true, label: 'Example 1 (found)' },
    { input: { root: createTree([5, 3, 6, 2, 4, null, 7]), k: 28 }, expected: false, label: 'Example 2 (not found)' },
];

