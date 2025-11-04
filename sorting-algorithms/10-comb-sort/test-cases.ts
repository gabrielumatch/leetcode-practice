/**
 * Comb Sort
 * Fundamental Algorithm
 */

export const testCases = [
    { input: [8, 4, 1, 56, 3, -44, 23, -6, 28, 0], expected: [-44, -6, 0, 1, 3, 4, 8, 23, 28, 56], label: 'Example 1' },
    { input: [64, 34, 25, 12, 22, 11, 90], expected: [11, 12, 22, 25, 34, 64, 90], label: 'Example 2' },
    { input: [1], expected: [1], label: 'Single element' },
    { input: [5, 2, 8, 1, 9], expected: [1, 2, 5, 8, 9], label: 'Example 3' },
    { input: [-5, -2, -8, -1, -9], expected: [-9, -8, -5, -2, -1], label: 'Negative numbers' },
];

