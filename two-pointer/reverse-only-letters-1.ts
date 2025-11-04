//Leet Code: Reverse Only Letters

console.log(reverseOnlyLetters('ab-cd')); //"ab-cd" -> "dc-ba"
console.log(reverseOnlyLetters('a--bc')); //"a--bc" -> "c--ba"
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!')); //"Test1ng-Leet=code-Q!" -> "Qedo-c1tse-Lgn=teT!"
console.log(reverseOnlyLetters('a')); //"Test1ng-Leet=code-Q!" -> "Qedo-c1tse-Lgn=teT!"
console.log(reverseOnlyLetters('')); //"Test1ng-Leet=code-Q!" -> "Qedo-c1tse-Lgn=teT!"

function isLetter(char: string) {
    return /^[a-zA-Z]$/.test(char);
}

function reverseOnlyLetters(str: string) {
    let left = 0;
    let right = str.length - 1;
    const result = str.split('');
    while (left < right) {
        if (!isLetter(result[left]!)) {
            left++;
        } else if (!isLetter(result[right]!)) {
            right--;
        } else {
            [result[left]!, result[right]!] = [result[right]!, result[left]!];
            left++;
            right--;
        }
    }
    return str + ' -> ' + result.join('');
}
