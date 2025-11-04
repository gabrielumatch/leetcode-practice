/**
 * Search Node in Binary Tree
 * Fundamental Operation
 */

export { TreeNode, createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';
import { createTree, TreeNode } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: { root: createTree([4, 2, 7, 1, 3]), val: 2 },
        expected: 2,
        label: 'Example 1 (found)',
        // Custom validator: checks if returned node has the correct value
        validator: (result: TreeNode | null) => result !== null && result.val === 2,
    },
    {
        input: { root: createTree([4, 2, 7, 1, 3]), val: 5 },
        expected: null,
        label: 'Example 2 (not found)',
        validator: (result: TreeNode | null) => result === null,
    },
    {
        input: { root: createTree([1]), val: 1 },
        expected: 1,
        label: 'Single node (found)',
        validator: (result: TreeNode | null) => result !== null && result.val === 1,
    },
    {
        input: { root: createTree([1, 2, 3, 4, 5, 6, 7]), val: 7 },
        expected: 7,
        label: 'Deep node',
        validator: (result: TreeNode | null) => result !== null && result.val === 7,
    },
];

