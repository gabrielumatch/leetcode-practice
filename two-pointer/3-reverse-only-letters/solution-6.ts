export const description = `
**Based on Solution 5** - Temp variable swap optimization 🚀

**Changes:**
- Kept \`split('')\` + \`join('')\` (optimized by V8 engine)
- Eliminated destructuring swap → temp variable (faster, no array allocation)
- Lookup table still O(1) for letter validation
- Less overhead in swap operation
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
            // Both are letters - swap using temp variable (no destructuring)
            const temp = result[left];
            result[left] = result[right];
            result[right] = temp;
            left++;
            right--;
        }
    }

    return result.join('');
}

