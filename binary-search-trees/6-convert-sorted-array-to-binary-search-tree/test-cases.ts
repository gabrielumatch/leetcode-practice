/**
 * Convert Sorted Array to Binary Search Tree
 * LeetCode #108
 */

export { TreeNode, treeToArray } from '../../trees/2-invert-binary-tree/test-cases';

export const testCases = [
    { input: [-10, -3, 0, 5, 9], expected: [0, -3, 9, -10, null, 5], label: 'Example 1' },
    { input: [1, 3], expected: [3, 1], label: 'Example 2' },
];

