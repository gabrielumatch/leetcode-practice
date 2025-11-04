/**
 * Count Nodes in Binary Tree
 * Fundamental Operation
 */

export { TreeNode, createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';
import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: createTree([1, 2, 3, 4, 5, 6, 7]),
        expected: 7,
        label: 'Example 1',
    },
    {
        input: createTree([1, 2]),
        expected: 2,
        label: 'Example 2',
    },
    {
        input: createTree([]),
        expected: 0,
        label: 'Empty tree',
    },
    {
        input: createTree([1]),
        expected: 1,
        label: 'Single node',
    },
    {
        input: createTree([1, 2, 3, null, null, 4, 5]),
        expected: 5,
        label: 'Example 3',
    },
];

