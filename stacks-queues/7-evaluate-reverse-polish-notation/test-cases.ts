/**
 * Evaluate Reverse Polish Notation
 * LeetCode #150
 */

export const testCases = [
    {
        input: ['2', '1', '+', '3', '*'],
        expected: 9,
        label: 'Example 1 ((2 + 1) * 3)',
    },
    {
        input: ['4', '13', '5', '/', '+'],
        expected: 6,
        label: 'Example 2 (4 + (13 / 5))',
    },
    {
        input: ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'],
        expected: 22,
        label: 'Example 3 (complex)',
    },
    {
        input: ['3', '4', '+'],
        expected: 7,
        label: 'Simple addition',
    },
];

