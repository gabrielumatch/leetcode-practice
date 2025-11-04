export const testCases = [
    { input: 'A man, a plan, a canal: Panama', expected: true, label: 'Long (31 chars)' },
    { input: 'race a car', expected: false, label: 'Medium (10 chars)' },
    { input: ' ', expected: true, label: 'Single space' },
    { input: 'Was it a car or a cat I saw?', expected: true, label: 'Long (28 chars)' },
    { input: 'Madam', expected: true, label: 'Short (5 chars)' },
    { input: 'hello', expected: false, label: 'Short (5 chars)' },
    { input: '0P', expected: false, label: 'Very short (2 chars)' },
    { input: 'a.', expected: true, label: 'Very short (2 chars)' },
];

