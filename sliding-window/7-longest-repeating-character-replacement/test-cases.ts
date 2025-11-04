/**
 * Longest Repeating Character Replacement
 * LeetCode #424
 */

export const testCases = [
    {
        input: { s: 'ABAB', k: 2 },
        expected: 4,
        label: 'Example 1',
    },
    {
        input: { s: 'AABABBA', k: 1 },
        expected: 4,
        label: 'Example 2',
    },
    {
        input: { s: 'AAAA', k: 2 },
        expected: 4,
        label: 'All same char',
    },
    {
        input: { s: 'ABCDE', k: 1 },
        expected: 2,
        label: 'All different',
    },
];

