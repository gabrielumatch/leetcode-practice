/**
 * Task Scheduler
 * LeetCode #621
 */

export const testCases = [
    { input: { tasks: ['A', 'A', 'A', 'B', 'B', 'B'], n: 2 }, expected: 8, label: 'Example 1' },
    { input: { tasks: ['A', 'A', 'A', 'B', 'B', 'B'], n: 0 }, expected: 6, label: 'Example 2 (no cooldown)' },
    { input: { tasks: ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], n: 2 }, expected: 16, label: 'Example 3' },
];

