/**
 * Word Break
 * LeetCode #139
 */

export const testCases = [
    { input: { s: 'leetcode', wordDict: ['leet', 'code'] }, expected: true, label: 'Example 1' },
    { input: { s: 'applepenapple', wordDict: ['apple', 'pen'] }, expected: true, label: 'Example 2' },
    { input: { s: 'catsandog', wordDict: ['cats', 'dog', 'sand', 'and', 'cat'] }, expected: false, label: 'Example 3 (impossible)' },
];

