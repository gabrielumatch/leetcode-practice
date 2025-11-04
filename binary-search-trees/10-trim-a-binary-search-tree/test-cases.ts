/**
 * Trim a Binary Search Tree
 * LeetCode #669
 */

export { TreeNode, createTree, treeToArray } from '../../trees/2-invert-binary-tree/test-cases';

import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    { input: { root: createTree([1, 0, 2]), low: 1, high: 2 }, expected: [1, null, 2], label: 'Example 1' },
    { input: { root: createTree([3, 0, 4, null, 2, null, null, 1]), low: 1, high: 3 }, expected: [3, 2, null, 1], label: 'Example 2' },
];

