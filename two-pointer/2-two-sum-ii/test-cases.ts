export const testCases = [
    { input: { numbers: [2, 7, 11, 15], target: 9 }, expected: [1, 2], label: 'Example 1' },
    { input: { numbers: [2, 3, 4], target: 6 }, expected: [1, 3], label: 'Example 2' },
    { input: { numbers: [-1, 0], target: -1 }, expected: [1, 2], label: 'Example 3 (negative)' },
    { input: { numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 19 }, expected: [9, 10], label: 'Last two elements' },
    { input: { numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 3 }, expected: [1, 2], label: 'First two elements' },
    { input: { numbers: [-10, -5, -2, 0, 3, 5, 8], target: -7 }, expected: [1, 5], label: 'Mixed negative/positive' },
    { input: { numbers: [1, 3, 4, 5, 7, 11], target: 9 }, expected: [3, 4], label: 'Middle elements' },
    { input: { numbers: [5, 25, 75], target: 100 }, expected: [2, 3], label: 'Large gaps' },
];

