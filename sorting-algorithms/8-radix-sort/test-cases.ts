/**
 * Radix Sort
 * Fundamental Algorithm
 */

export const testCases = [
    { input: [170, 45, 75, 90, 802, 24, 2, 66], expected: [2, 24, 45, 66, 75, 90, 170, 802], label: 'Example 1' },
    { input: [121, 432, 564, 23, 1, 45, 788], expected: [1, 23, 45, 121, 432, 564, 788], label: 'Example 2' },
    { input: [1], expected: [1], label: 'Single element' },
    { input: [10, 20, 30, 40, 50], expected: [10, 20, 30, 40, 50], label: 'Already sorted' },
    { input: [329, 457, 657, 839, 436, 720, 355], expected: [329, 355, 436, 457, 657, 720, 839], label: 'Example 3' },
];

