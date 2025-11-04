/**
 * Min Stack
 * LeetCode #155
 */

export const testCases = [
    {
        input: {
            operations: ['MinStack', 'push', 'push', 'push', 'getMin', 'pop', 'top', 'getMin'],
            args: [[], [-2], [0], [-3], [], [], [], []],
        },
        expected: [null, null, null, null, -3, null, 0, -2],
        label: 'Example 1',
    },
    {
        input: {
            operations: ['MinStack', 'push', 'push', 'getMin', 'pop', 'getMin'],
            args: [[], [1], [2], [], [], []],
        },
        expected: [null, null, null, 1, null, 1],
        label: 'Ascending values',
    },
];

