/**
 * Find Median from Data Stream
 * LeetCode #295
 */

export const testCases = [
    { input: { operations: ['MedianFinder', 'addNum', 'addNum', 'findMedian', 'addNum', 'findMedian'], args: [[], [1], [2], [], [3], []] }, expected: [null, null, null, 1.5, null, 2.0], label: 'Example 1' },
    { input: { operations: ['MedianFinder', 'addNum', 'findMedian'], args: [[], [1], []] }, expected: [null, null, 1.0], label: 'Single element' },
];

