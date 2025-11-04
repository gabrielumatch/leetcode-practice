// Two Pointers (in-place)
export function solution(str: string): string {
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

