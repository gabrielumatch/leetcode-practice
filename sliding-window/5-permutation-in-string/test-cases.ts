/**
 * Permutation in String
 * LeetCode #567
 */

export const testCases = [
    {
        input: { s1: 'ab', s2: 'eidbaooo' },
        expected: true,
        label: 'Example 1 (has "ba")',
    },
    {
        input: { s1: 'ab', s2: 'eidboaoo' },
        expected: false,
        label: 'Example 2 (no permutation)',
    },
    {
        input: { s1: 'abc', s2: 'bbbca' },
        expected: true,
        label: 'Substring at end',
    },
    {
        input: { s1: 'hello', s2: 'ooolleoooleh' },
        expected: false,
        label: 'No match',
    },
];

