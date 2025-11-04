// Regex Replace
export function solution(str: string): string {
    const letters = str.match(/[a-zA-Z]/g) || [];
    letters.reverse();

    let index = 0;
    return str.replace(/[a-zA-Z]/g, () => letters[index++]);
}

