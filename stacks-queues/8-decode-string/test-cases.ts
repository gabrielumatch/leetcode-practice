/**
 * Decode String
 * LeetCode #394
 */

export const testCases = [
    {
        input: '3[a]2[bc]',
        expected: 'aaabcbc',
        label: 'Example 1',
    },
    {
        input: '3[a2[c]]',
        expected: 'accaccacc',
        label: 'Example 2 (nested)',
    },
    {
        input: '2[abc]3[cd]ef',
        expected: 'abcabccdcdcdef',
        label: 'Example 3',
    },
    {
        input: 'abc3[cd]xyz',
        expected: 'abccdcdcdxyz',
        label: 'Mixed plain and encoded',
    },
];

