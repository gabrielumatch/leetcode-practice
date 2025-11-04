/**
 * Counting Sort
 * Fundamental Algorithm
 */

export const testCases = [
    { input: [4, 2, 2, 8, 3, 3, 1], expected: [1, 2, 2, 3, 3, 4, 8], label: 'Example 1' },
    { input: [1, 4, 1, 2, 7, 5, 2], expected: [1, 1, 2, 2, 4, 5, 7], label: 'Example 2' },
    { input: [1], expected: [1], label: 'Single element' },
    { input: [5, 5, 5, 5, 5], expected: [5, 5, 5, 5, 5], label: 'All same' },
    { input: [0, 1, 2, 3, 4, 5], expected: [0, 1, 2, 3, 4, 5], label: 'Already sorted' },
];

