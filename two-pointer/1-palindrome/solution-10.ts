export const description = `
**Based on Solution 8** - Optimized array size

**Changes:**
- Reduced \`Uint8Array(256)\` → \`Uint8Array(128)\` (ASCII printable range)
- Removed early exit branch (no unnecessary if)
- Smaller array = better L1 cache utilization
- Less memory, potentially faster lookups
`;

// Pre-compute lookup table - only 128 bytes for ASCII range
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

