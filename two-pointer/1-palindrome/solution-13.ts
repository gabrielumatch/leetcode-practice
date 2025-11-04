export const description = `
**Based on Solution 9** - Removed early exit

**Changes:**
- Removed \`if (s.length <= 1) return true;\` early exit
- Hypothesis: Early exit adds branch overhead on every call
- May be faster for short strings by avoiding the branch
- Single loop init (like Solution 9)
- Testing if early exit is actually beneficial
`;

// Pre-compute lookup table in a single loop
const normalizedChar = new Uint8Array(256);
for (let i = 0; i < 256; i++) {
    if (i >= 48 && i <= 57) {
        // Digits 0-9 - keep same
        normalizedChar[i] = i;
    } else if (i >= 65 && i <= 90) {
        // Uppercase A-Z - convert to lowercase
        normalizedChar[i] = i + 32;
    } else if (i >= 97 && i <= 122) {
        // Lowercase a-z - keep same
        normalizedChar[i] = i;
    }
    // Everything else stays 0 (invalid)
}

export function solution(s: string): boolean {
    // NO early exit - let the loop handle everything
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const leftCode = s.charCodeAt(left);
        const rightCode = s.charCodeAt(right);

        // Check if alphanumeric (inline)
        const isLeftValid = (leftCode >= 48 && leftCode <= 57) ||
                           (leftCode >= 65 && leftCode <= 90) ||
                           (leftCode >= 97 && leftCode <= 122);

        const isRightValid = (rightCode >= 48 && rightCode <= 57) ||
                            (rightCode >= 65 && rightCode <= 90) ||
                            (rightCode >= 97 && rightCode <= 122);

        if (!isLeftValid) {
            left++;
        } else if (!isRightValid) {
            right--;
        } else {
            // Normalize to lowercase with bitwise OR (faster than +32)
            if ((leftCode | 32) !== (rightCode | 32)) {
                return false;
            }
            left++;
            right--;
        }
    }

    return true;
}

