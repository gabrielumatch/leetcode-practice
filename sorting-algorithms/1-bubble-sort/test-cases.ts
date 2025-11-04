/**
 * Bubble Sort
 * Fundamental Algorithm
 */

export const testCases = [
    { input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90], label: 'Example 1' },
    { input: [5, 2, 8, 1, 9], expected: [1, 2, 5, 8, 9], label: 'Example 2' },
    { input: [1], expected: [1], label: 'Single element' },
    { input: [3, 3, 3, 3], expected: [3, 3, 3, 3], label: 'All same' },
    { input: [9, 8, 7, 6, 5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5, 6, 7, 8, 9], label: 'Reverse order' },
];

