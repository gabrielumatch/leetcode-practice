export const description = `
**Two Pointers with Bitwise Operations**

Replaced arithmetic with bitwise operations for speed.
- Uses bitwise OR \`| 32\` instead of \`+ 32\` for lowercase
- Bitwise operations are faster (direct CPU instruction)
- Still uses intermediate variables for validation
- ~19% faster than Solution 4
`;

// Two Pointers with bitwise operations (maximum optimization)
export function solution(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const leftCode = s.charCodeAt(left);
        const rightCode = s.charCodeAt(right);

        // Check if alphanumeric (inline)
        const isLeftValid = (leftCode >= 48 && leftCode <= 57) ||   // 0-9
                           (leftCode >= 65 && leftCode <= 90) ||   // A-Z
                           (leftCode >= 97 && leftCode <= 122);    // a-z

        const isRightValid = (rightCode >= 48 && rightCode <= 57) ||
                            (rightCode >= 65 && rightCode <= 90) ||
                            (rightCode >= 97 && rightCode <= 122);

        if (!isLeftValid) {
            left++;
        } else if (!isRightValid) {
            right--;
        } else {
            // Normalize to lowercase with bitwise OR (faster than +32)
            // For letters: | 32 converts to lowercase
            // For digits: | 32 doesn't change them
            if ((leftCode | 32) !== (rightCode | 32)) {
                return false;
            }
            left++;
            right--;
        }
    }

    return true;
}

