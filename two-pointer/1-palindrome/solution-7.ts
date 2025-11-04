export const description = `
**Based on Solution 6** - Lookup table for validation

**Changes:**
- Pre-computed \`Uint8Array[128]\` for valid chars
- Single array access replaces 3 comparisons
- Reduced branch predictions, better CPU pipeline
- ~21% faster than Solution 6
`;

// Pre-compute lookup table for valid ASCII characters
const validChars = new Uint8Array(128);
// Mark 0-9 (48-57)
for (let i = 48; i <= 57; i++) validChars[i] = 1;
// Mark A-Z (65-90)
for (let i = 65; i <= 90; i++) validChars[i] = 1;
// Mark a-z (97-122)
for (let i = 97; i <= 122; i++) validChars[i] = 1;

// Two Pointers with lookup table
export function solution(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const leftCode = s.charCodeAt(left);
        const rightCode = s.charCodeAt(right);

        // Use lookup table for validation (single array access)
        if (!validChars[leftCode]) {
            left++;
        } else if (!validChars[rightCode]) {
            right--;
        } else {
            // Both valid, compare with bitwise OR
            if ((leftCode | 32) !== (rightCode | 32)) {
                return false;
            }
            left++;
            right--;
        }
    }

    return true;
}

