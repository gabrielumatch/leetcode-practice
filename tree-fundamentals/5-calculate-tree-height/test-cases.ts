/**
 * Calculate Tree Height
 * Fundamental Operation
 */

export { TreeNode, createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';
import { createTree } from '../../trees/1-maximum-depth-of-binary-tree/test-cases';

export const testCases = [
    {
        input: createTree([3, 9, 20, null, null, 15, 7]),
        expected: 3,
        label: 'Example 1',
    },
    {
        input: createTree([1, null, 2]),
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
        input: createTree([1, 2, 3, 4, 5, 6, 7]),
        expected: 3,
        label: 'Complete tree',
    },
];

