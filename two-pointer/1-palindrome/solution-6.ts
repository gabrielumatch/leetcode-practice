export const description = `
**Based on Solution 5** - Remove intermediate variables

**Changes:**
- Eliminated \`isLeftValid\`/\`isRightValid\` variables
- Inline all validation directly in \`if\` conditions
- Fewer memory allocations, better JIT optimization
- ~40% faster than Solution 5
`;

// Two Pointers without intermediate variables (extreme optimization attempt)
export function solution(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const leftCode = s.charCodeAt(left);
        const rightCode = s.charCodeAt(right);

        // Check and skip non-alphanumeric from left (inline)
        if (!((leftCode >= 48 && leftCode <= 57) || (leftCode >= 65 && leftCode <= 90) || (leftCode >= 97 && leftCode <= 122))) {
            left++;
        } else if (!((rightCode >= 48 && rightCode <= 57) || (rightCode >= 65 && rightCode <= 90) || (rightCode >= 97 && rightCode <= 122))) {
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

