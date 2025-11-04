/**
 * Inorder Traversal
 * Fundamental Operation
 */

export { TreeNode, createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';
import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: createTree([1, null, 2, 3]),
        expected: [1, 3, 2],
        label: 'Example 1',
    },
    {
        input: createTree([]),
        expected: [],
        label: 'Empty tree',
    },
    {
        input: createTree([1]),
        expected: [1],
        label: 'Single node',
    },
    {
        input: createTree([1, 2, 3, 4, 5]),
        expected: [4, 2, 5, 1, 3],
        label: 'Example 2',
    },
    {
        input: createTree([1, 2, 3, null, null, 4, 5]),
        expected: [2, 1, 4, 3, 5],
        label: 'Example 3',
    },
];

