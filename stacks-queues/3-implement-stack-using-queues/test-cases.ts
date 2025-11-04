/**
 * Implement Stack using Queues
 * LeetCode #225
 */

export const testCases = [
    {
        input: {
            operations: ['MyStack', 'push', 'push', 'top', 'pop', 'empty'],
            args: [[], [1], [2], [], [], []],
        },
        expected: [null, null, null, 2, 2, false],
        label: 'Example 1',
    },
    {
        input: {
            operations: ['MyStack', 'push', 'pop', 'empty'],
            args: [[], [1], [], []],
        },
        expected: [null, null, 1, true],
        label: 'Single element',
    },
];

