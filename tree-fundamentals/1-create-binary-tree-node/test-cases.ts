/**
 * Create Binary Tree Node
 * Fundamental Operation
 */

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

export const testCases = [
    {
        input: 5,
        expected: [5],
        label: 'Single node',
        // Custom validator: checks if returned node has correct structure
        validator: (result: TreeNode | null) => {
            if (!result) return false;
            return result.val === 5 && result.left === null && result.right === null;
        },
    },
    {
        input: 10,
        expected: [10],
        label: 'Value 10',
        validator: (result: TreeNode | null) => {
            if (!result) return false;
            return result.val === 10 && result.left === null && result.right === null;
        },
    },
    {
        input: 0,
        expected: [0],
        label: 'Value 0',
        validator: (result: TreeNode | null) => {
            if (!result) return false;
            return result.val === 0 && result.left === null && result.right === null;
        },
    },
];

