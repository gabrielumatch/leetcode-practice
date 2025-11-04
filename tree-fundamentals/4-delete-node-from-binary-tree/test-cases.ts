/**
 * Delete Node from Binary Tree
 * Fundamental Operation
 */

export { TreeNode, createTree, treeToArray } from '../2-insert-node-into-binary-tree/test-cases';
import { createTree, treeToArray } from '../2-insert-node-into-binary-tree/test-cases';

export const testCases = [
    {
        input: { root: createTree([5, 3, 6, 2, 4, null, 7]), key: 3 },
        expected: [5, 4, 6, 2, null, null, 7],
        label: 'Example 1',
    },
    {
        input: { root: createTree([5, 3, 6, 2, 4, null, 7]), key: 0 },
        expected: [5, 3, 6, 2, 4, null, 7],
        label: 'Key not found',
    },
    {
        input: { root: null, key: 0 },
        expected: [],
        label: 'Empty tree',
    },
    {
        input: { root: createTree([1]), key: 1 },
        expected: [],
        label: 'Delete root',
    },
    {
        input: { root: createTree([1, 2, 3]), key: 2 },
        expected: [1, 3],
        label: 'Delete left child',
    },
];

