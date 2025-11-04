export const description = `
**Based on Solution 11** - Explicit bounds checking

**Changes:**
- Uses \`Uint8Array(128)\` like Solution 11
- Adds explicit \`< 128\` check before array access
- Tests if bounds checking overhead is the issue
- Hypothesis: This should be slower due to extra branches
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
        const leftCode = s.charCodeAt(left);
        const rightCode = s.charCodeAt(right);
        
        // Explicit bounds checking (should never happen for ASCII)
        const leftNorm = leftCode < 128 ? normalizedChar[leftCode] : 0;
        const rightNorm = rightCode < 128 ? normalizedChar[rightCode] : 0;

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

