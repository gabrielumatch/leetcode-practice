export const description = `
**Based on Solution 1** - Lookup table optimization 🚀

**Changes:**
- Replaced \`/^[a-zA-Z]$/.test()\` regex with \`Uint8Array\` lookup table
- Pre-computed letter validation (A-Z: 65-90, a-z: 97-122)
- Direct ASCII code check via \`charCodeAt()\`
- O(1) lookup vs regex overhead
- Cache-friendly (128 bytes fits in L1 cache)
`;

// Pre-compute lookup table for letter validation
const isLetterTable = new Uint8Array(128);
// Uppercase A-Z (65-90)
for (let i = 65; i <= 90; i++) isLetterTable[i] = 1;
// Lowercase a-z (97-122)
for (let i = 97; i <= 122; i++) isLetterTable[i] = 1;
// Everything else stays 0 (not a letter)

export function solution(str: string): string {
    let left = 0;
    let right = str.length - 1;
    const result = str.split('');

    while (left < right) {
        const leftCode = result[left].charCodeAt(0);
        const rightCode = result[right].charCodeAt(0);

        if (!isLetterTable[leftCode]) {
            left++;
        } else if (!isLetterTable[rightCode]) {
            right--;
        } else {
            // Both are letters - swap
            [result[left], result[right]] = [result[right], result[left]];
            left++;
            right--;
        }
    }

    return result.join('');
}

