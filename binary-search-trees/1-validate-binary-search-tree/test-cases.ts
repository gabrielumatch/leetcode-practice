/**
 * Validate Binary Search Tree
 * LeetCode #98
 */

export { TreeNode, createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    { input: createTree([2, 1, 3]), expected: true, label: 'Example 1 (valid BST)' },
    { input: createTree([5, 1, 4, null, null, 3, 6]), expected: false, label: 'Example 2 (invalid BST)' },
];

