/**
 * Valid Parentheses
 * LeetCode #20
 */

export const testCases = [
    {
        input: '()',
        expected: true,
        label: 'Example 1',
    },
    {
        input: '()[]{}',
        expected: true,
        label: 'Example 2',
    },
    {
        input: '(]',
        expected: false,
        label: 'Example 3 (wrong type)',
    },
    {
        input: '([)]',
        expected: false,
        label: 'Example 4 (wrong order)',
    },
    {
        input: '{[]}',
        expected: true,
        label: 'Nested brackets',
    },
];

