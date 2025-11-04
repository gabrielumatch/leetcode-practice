/**
 * Word Search
 * LeetCode #79
 */

export const testCases = [
    { input: { board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word: 'ABCCED' }, expected: true, label: 'Example 1' },
    { input: { board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word: 'SEE' }, expected: true, label: 'Example 2' },
    { input: { board: [['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], word: 'ABCB' }, expected: false, label: 'Example 3' },
];

