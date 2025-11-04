/**
 * Course Schedule
 * LeetCode #207
 */

export const testCases = [
    { input: { numCourses: 2, prerequisites: [[1, 0]] }, expected: true, label: 'Example 1 (possible)' },
    { input: { numCourses: 2, prerequisites: [[1, 0], [0, 1]] }, expected: false, label: 'Example 2 (cycle)' },
    { input: { numCourses: 5, prerequisites: [[1, 4], [2, 4], [3, 1], [3, 2]] }, expected: true, label: 'Multiple dependencies' },
];

