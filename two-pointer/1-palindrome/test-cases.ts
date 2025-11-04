export const testCases = [
    { input: 'A man, a plan, a canal: Panama', expected: true },
    { input: 'race a car', expected: false },
    { input: ' ', expected: true },
    { input: 'Was it a car or a cat I saw?', expected: true },
    { input: 'Madam', expected: true },
    { input: 'hello', expected: false },
    { input: '0P', expected: false },
    { input: 'a.', expected: true },
];

