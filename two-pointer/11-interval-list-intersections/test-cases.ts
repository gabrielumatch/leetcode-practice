/**
 * Interval List Intersections
 * LeetCode #986
 */

export const testCases = [
    {
        input: {
            firstList: [[0, 2], [5, 10], [13, 23], [24, 25]],
            secondList: [[1, 5], [8, 12], [15, 24], [25, 26]],
        },
        expected: [[1, 2], [5, 5], [8, 10], [15, 23], [24, 24], [25, 25]],
        label: 'Example 1',
    },
    {
        input: {
            firstList: [[1, 3], [5, 9]],
            secondList: [],
        },
        expected: [],
        label: 'Empty second list',
    },
    {
        input: {
            firstList: [],
            secondList: [[4, 8], [10, 12]],
        },
        expected: [],
        label: 'Empty first list',
    },
    {
        input: {
            firstList: [[1, 7]],
            secondList: [[3, 10]],
        },
        expected: [[3, 7]],
        label: 'Single interval overlap',
    },
];

