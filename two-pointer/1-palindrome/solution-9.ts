export const description = `
**Based on Solution 8** - Single loop init + early exit

**Changes:**
- Combined 3 initialization loops into 1
- Added early exit for \`s.length <= 1\`
- Slightly faster in some runs, basically tied with Solution 8
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
    // Early exit for trivial cases
    if (s.length <= 1) return true;

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

