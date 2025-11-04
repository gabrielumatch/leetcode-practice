// Stack Approach
export function solution(str: string): string {
    function isLetter(char: string) {
        return /^[a-zA-Z]$/.test(char);
    }

    const letters: string[] = [];
    for (const char of str) {
        if (isLetter(char)) {
            letters.push(char);
        }
    }

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

