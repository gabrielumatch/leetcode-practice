/**
 * Group Anagrams
 * LeetCode #49
 */

export const testCases = [
    {
        input: ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'],
        expected: [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']],
        label: 'Example 1',
    },
    {
        input: [''],
        expected: [['']],
        label: 'Example 2 (empty string)',
    },
    {
        input: ['a'],
        expected: [['a']],
        label: 'Example 3 (single)',
    },
    {
        input: ['abc', 'bca', 'cab', 'xyz', 'zyx', 'yxz'],
        expected: [['abc', 'bca', 'cab'], ['xyz', 'zyx', 'yxz']],
        label: 'Two groups',
    },
];

