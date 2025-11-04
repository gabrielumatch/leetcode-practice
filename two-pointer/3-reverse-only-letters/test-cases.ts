export const testCases = [
    { input: 'ab-cd', expected: 'dc-ba', label: 'Short (4 letters)' },
    { input: 'a-bC-dEf-ghIj', expected: 'j-Ih-gfE-dCba', label: 'Medium (9 letters)' },
    { input: 'Test1ng-Leet=code-Q!', expected: 'Qedo1ct-eeLg=ntse-T!', label: 'Long (15 letters)' },
    { input: '---', expected: '---', label: 'No letters' },
    { input: 'abc', expected: 'cba', label: 'Only letters' },
    { input: 'a', expected: 'a', label: 'Single letter' },
    { input: '1234567890', expected: '1234567890', label: 'Only numbers' },
    { input: 'a!!!b', expected: 'b!!!a', label: 'Letters at edges' },
    { input: '!!!a!!!b!!!', expected: '!!!b!!!a!!!', label: 'Letters in middle' },
    { input: 'aB1cD2eF3gH4', expected: 'Hg1Fe2Dc3Ba4', label: 'Mixed alphanumeric' },
];

