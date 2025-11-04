/**
 * Ransom Note
 * LeetCode #383
 */

export const testCases = [
    {
        input: { ransomNote: 'a', magazine: 'b' },
        expected: false,
        label: 'Example 1 (impossible)',
    },
    {
        input: { ransomNote: 'aa', magazine: 'ab' },
        expected: false,
        label: 'Example 2 (not enough chars)',
    },
    {
        input: { ransomNote: 'aa', magazine: 'aab' },
        expected: true,
        label: 'Example 3 (possible)',
    },
    {
        input: { ransomNote: 'hello', magazine: 'helllllo' },
        expected: true,
        label: 'Multiple chars',
    },
];

