import {
    compareImplementations,
    measureMemory,
    testCases,
    formatBytes,
} from '../utils/performance';

// ========================================
// IMPLEMENTATION 1: Two Pointers (Original)
// ========================================
function reverseOnlyLetters1(str: string): string {
    function isLetter(char: string) {
        return /^[a-zA-Z]$/.test(char);
    }

    let left = 0;
    let right = str.length - 1;
    const result = str.split('');

    while (left < right) {
        if (!isLetter(result[left])) {
            left++;
        } else if (!isLetter(result[right])) {
            right--;
        } else {
            [result[left], result[right]] = [result[right], result[left]];
            left++;
            right--;
        }
    }
    return result.join('');
}

// ========================================
// IMPLEMENTATION 2: Stack Approach
// ========================================
function reverseOnlyLetters2(str: string): string {
    function isLetter(char: string) {
        return /^[a-zA-Z]$/.test(char);
    }

    // Extract all letters
    const letters: string[] = [];
    for (const char of str) {
        if (isLetter(char)) {
            letters.push(char);
        }
    }

    // Build result by replacing letters in reverse
    const result: string[] = [];
    for (const char of str) {
        if (isLetter(char)) {
            result.push(letters.pop()!);
        } else {
            result.push(char);
        }
    }

    return result.join('');
}

// ========================================
// IMPLEMENTATION 3: Regex Replace
// ========================================
function reverseOnlyLetters3(str: string): string {
    const letters = str.match(/[a-zA-Z]/g) || [];
    letters.reverse();

    let index = 0;
    return str.replace(/[a-zA-Z]/g, () => letters[index++]);
}

// ========================================
// TEST CASES
// ========================================
console.log('🎯 REVERSE ONLY LETTERS - BENCHMARK\n');

const testInputs = [
    { input: 'ab-cd', expected: 'dc-ba' },
    { input: 'a-bC-dEf-ghIj', expected: 'j-Ih-gfE-dCba' },
    {
        input: 'Test1ng-Leet=code-Q!',
        expected: 'Qedo1ct-eeLg=ntse-T!',
    },
];

// Test Implementation 1
console.log('Testing Implementation 1: Two Pointers');
testCases(reverseOnlyLetters1, testInputs);

// ========================================
// PERFORMANCE COMPARISON
// ========================================

const testString = 'The-Quick-Brown-Fox-Jumps-Over-The-Lazy-Dog!';

compareImplementations(
    [
        {
            name: 'Two Pointers (in-place)',
            fn: () => reverseOnlyLetters1(testString),
        },
        {
            name: 'Stack Approach',
            fn: () => reverseOnlyLetters2(testString),
        },
        {
            name: 'Regex Replace',
            fn: () => reverseOnlyLetters3(testString),
        },
    ],
    10000
);

// ========================================
// MEMORY ANALYSIS
// ========================================
console.log('\n💾 MEMORY USAGE ANALYSIS');
console.log('='.repeat(80));

const longString = 'Test1ng-Leet=code-Q!'.repeat(100);

const mem1 = measureMemory(() => reverseOnlyLetters1(longString));
console.log(`\n📍 Two Pointers:`);
console.log(`   Memory Used: ${formatBytes(mem1.memoryUsed)}`);

const mem2 = measureMemory(() => reverseOnlyLetters2(longString));
console.log(`\n📍 Stack Approach:`);
console.log(`   Memory Used: ${formatBytes(mem2.memoryUsed)}`);

const mem3 = measureMemory(() => reverseOnlyLetters3(longString));
console.log(`\n📍 Regex Replace:`);
console.log(`   Memory Used: ${formatBytes(mem3.memoryUsed)}`);

console.log('\n' + '='.repeat(80));

