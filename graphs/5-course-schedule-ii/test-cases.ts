/**
 * Course Schedule II
 * LeetCode #210
 */

export const testCases = [
    { input: { numCourses: 2, prerequisites: [[1, 0]] }, expected: [0, 1], label: 'Example 1' },
    { input: { numCourses: 4, prerequisites: [[1, 0], [2, 0], [3, 1], [3, 2]] }, expected: [0, 1, 2, 3], label: 'Example 2' },
    { input: { numCourses: 1, prerequisites: [] }, expected: [0], label: 'Example 3 (single course)' },
];

