export const description = `
**Based on Solution 7** - Combined validation + normalization 🏆

**Changes:**
- Lookup table now returns normalized char (not just validation)
- Eliminated bitwise OR from loop (pre-computed)
- Single array access does both validation AND normalization
- Champion solution! 🥇
`;

// Pre-compute lookup table that validates AND normalizes
const normalizedChar = new Uint8Array(256);
// Digits 0-9 (48-57) - keep same
for (let i = 48; i <= 57; i++) normalizedChar[i] = i;
// Uppercase A-Z (65-90) - convert to lowercase (97-122)
for (let i = 65; i <= 90; i++) normalizedChar[i] = i + 32;
// Lowercase a-z (97-122) - keep same
for (let i = 97; i <= 122; i++) normalizedChar[i] = i;
// Everything else stays 0 (invalid)

// Two Pointers with combined lookup
export function solution(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const leftNorm = normalizedChar[s.charCodeAt(left)];
        const rightNorm = normalizedChar[s.charCodeAt(right)];

        // If 0, it's invalid - skip
        if (!leftNorm) {
            left++;
        } else if (!rightNorm) {
            right--;
        } else {
            // Both valid and already normalized - just compare
            if (leftNorm !== rightNorm) {
                return false;
            }
            left++;
            right--;
        }
    }

    return true;
}

