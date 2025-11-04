// Reverse and Compare
export function solution(s: string): boolean {
    // Remove non-alphanumeric and convert to lowercase
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse and compare
    const reversed = clean.split('').reverse().join('');

    return clean === reversed;
}

