/**
 * Minimum Absolute Difference in BST
 * LeetCode #530
 */

export { TreeNode, createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    { input: createTree([4, 2, 6, 1, 3]), expected: 1, label: 'Example 1' },
    { input: createTree([1, 0, 48, null, null, 12, 49]), expected: 1, label: 'Example 2' },
];

