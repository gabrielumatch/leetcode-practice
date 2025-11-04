export const description = `
**Based on Solution 7 + 8** - Best of both worlds

**Changes:**
- Uses \`Uint8Array(128)\` like Solution 7 (cache-friendly)
- Pre-computes normalized chars like Solution 8 (no bitwise in loop)
- Combines smaller array size with pre-normalization
- Should be fastest for medium-sized strings
`;

// Pre-compute lookup table - 128 bytes with normalized chars
const normalizedChar = new Uint8Array(128);
// Digits 0-9 (48-57) - keep same
for (let i = 48; i <= 57; i++) normalizedChar[i] = i;
// Uppercase A-Z (65-90) - convert to lowercase (97-122)
for (let i = 65; i <= 90; i++) normalizedChar[i] = i + 32;
// Lowercase a-z (97-122) - keep same
for (let i = 97; i <= 122; i++) normalizedChar[i] = i;
// Everything else stays 0 (invalid)

export function solution(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const leftNorm = normalizedChar[s.charCodeAt(left)];
        const rightNorm = normalizedChar[s.charCodeAt(right)];

        if (!leftNorm) {
            left++;
        } else if (!rightNorm) {
            right--;
        } else {
            if (leftNorm !== rightNorm) {
                return false;
            }
            left++;
            right--;
        }
    }

    return true;
}

