/**
 * Longest Substring Without Repeating Characters
 * LeetCode #3
 */

export const testCases = [
    {
        input: 'abcabcbb',
        expected: 3,
        label: 'Example 1 ("abc")',
    },
    {
        input: 'bbbbb',
        expected: 1,
        label: 'Example 2 (all same)',
    },
    {
        input: 'pwwkew',
        expected: 3,
        label: 'Example 3 ("wke")',
    },
    {
        input: '',
        expected: 0,
        label: 'Empty string',
    },
    {
        input: 'dvdf',
        expected: 3,
        label: 'Overlapping ("vdf")',
    },
];

