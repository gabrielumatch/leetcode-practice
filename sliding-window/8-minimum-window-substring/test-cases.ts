/**
 * Minimum Window Substring
 * LeetCode #76
 */

export const testCases = [
    {
        input: { s: 'ADOBECODEBANC', t: 'ABC' },
        expected: 'BANC',
        label: 'Example 1',
    },
    {
        input: { s: 'a', t: 'a' },
        expected: 'a',
        label: 'Example 2 (single char)',
    },
    {
        input: { s: 'a', t: 'aa' },
        expected: '',
        label: 'Example 3 (impossible)',
    },
    {
        input: { s: 'ab', t: 'b' },
        expected: 'b',
        label: 'Single char at end',
    },
];

