/**
 * Selection Sort
 * Fundamental Algorithm
 */

export const testCases = [
    { input: [64, 25, 12, 22, 11], expected: [11, 12, 22, 25, 64], label: 'Example 1' },
    { input: [5, 2, 8, 1, 9], expected: [1, 2, 5, 8, 9], label: 'Example 2' },
    { input: [3, 1, 4, 1, 5], expected: [1, 1, 3, 4, 5], label: 'With duplicates' },
    { input: [1], expected: [1], label: 'Single element' },
    { input: [9, 8, 7, 6, 5], expected: [5, 6, 7, 8, 9], label: 'Reverse order' },
];

