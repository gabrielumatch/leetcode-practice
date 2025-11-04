/**
 * Number of Islands
 * LeetCode #200
 */

export const testCases = [
    {
        input: [
            ['1', '1', '1', '1', '0'],
            ['1', '1', '0', '1', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '0', '0', '0'],
        ],
        expected: 1,
        label: 'Example 1 (single island)',
    },
    {
        input: [
            ['1', '1', '0', '0', '0'],
            ['1', '1', '0', '0', '0'],
            ['0', '0', '1', '0', '0'],
            ['0', '0', '0', '1', '1'],
        ],
        expected: 3,
        label: 'Example 2 (three islands)',
    },
];

