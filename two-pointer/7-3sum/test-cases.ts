/**
 * 3Sum
 * LeetCode #15
 */

export const testCases = [
    { 
        input: [-1, 0, 1, 2, -1, -4], 
        expected: [[-1, -1, 2], [-1, 0, 1]],
        label: 'Example 1'
    },
    { 
        input: [0, 1, 1], 
        expected: [],
        label: 'Example 2 (no solution)'
    },
    { 
        input: [0, 0, 0], 
        expected: [[0, 0, 0]],
        label: 'Example 3 (all zeroes)'
    },
    { 
        input: [-2, 0, 1, 1, 2], 
        expected: [[-2, 0, 2], [-2, 1, 1]],
        label: 'Multiple solutions'
    },
];

