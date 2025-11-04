/**
 * Valid Anagram
 * LeetCode #242
 */

export const testCases = [
    {
        input: { s: 'anagram', t: 'nagaram' },
        expected: true,
        label: 'Example 1 (valid)',
    },
    {
        input: { s: 'rat', t: 'car' },
        expected: false,
        label: 'Example 2 (invalid)',
    },
    {
        input: { s: 'listen', t: 'silent' },
        expected: true,
        label: 'Valid anagram',
    },
    {
        input: { s: 'a', t: 'ab' },
        expected: false,
        label: 'Different lengths',
    },
];

