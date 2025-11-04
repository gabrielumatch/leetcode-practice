/**
 * Search in a Binary Search Tree
 * LeetCode #700
 */

export { TreeNode, createTree, treeToArray } from '../../trees/2-invert-binary-tree/test-cases';

import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    { input: { root: createTree([4, 2, 7, 1, 3]), val: 2 }, expected: [2, 1, 3], label: 'Example 1 (found)' },
    { input: { root: createTree([4, 2, 7, 1, 3]), val: 5 }, expected: [], label: 'Example 2 (not found)' },
];

