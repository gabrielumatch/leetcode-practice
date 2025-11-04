// Filter + Reduce
export function solution(str: string): string {
    const letters = str.split('').filter(c => /[a-zA-Z]/.test(c)).reverse();
    let idx = 0;
    return str.split('').map(c => /[a-zA-Z]/.test(c) ? letters[idx++] : c).join('');
}

