/**
 * Level Order Traversal
 * Fundamental Operation
 */

export { TreeNode, createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';
import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: createTree([3, 9, 20, null, null, 15, 7]),
        expected: [[3], [9, 20], [15, 7]],
        label: 'Example 1',
    },
    {
        input: createTree([1]),
        expected: [[1]],
        label: 'Single node',
    },
    {
        input: createTree([]),
        expected: [],
        label: 'Empty tree',
    },
    {
        input: createTree([1, 2, 3, 4, 5]),
        expected: [[1], [2, 3], [4, 5]],
        label: 'Example 2',
    },
    {
        input: createTree([1, 2, null, 3, 4]),
        expected: [[1], [2], [3, 4]],
        label: 'Example 3',
    },
];

