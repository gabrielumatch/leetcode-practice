/**
 * Find All Anagrams in a String
 * LeetCode #438
 */

export const testCases = [
    {
        input: { s: 'cbaebabacd', p: 'abc' },
        expected: [0, 6],
        label: 'Example 1',
    },
    {
        input: { s: 'abab', p: 'ab' },
        expected: [0, 1, 2],
        label: 'Example 2 (overlapping)',
    },
    {
        input: { s: 'baa', p: 'aa' },
        expected: [1],
        label: 'Single match',
    },
    {
        input: { s: 'aaaaaaaaaa', p: 'aaaaaaaaaaaaa' },
        expected: [],
        label: 'Target longer than string',
    },
];

