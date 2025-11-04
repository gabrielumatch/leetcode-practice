export const description = `
**Two Pointers with ASCII Validation**

First major optimization: validate using ASCII codes instead of regex.
- Uses \`charCodeAt()\` for ASCII validation
- Helper functions for validation and case conversion
- No intermediate strings/arrays
- Arithmetic operation \`+32\` for lowercase conversion
`;

// Two Pointers with inline ASCII validation (most optimized)
export function solution(s: string): boolean {
    function isAlphanumeric(code: number): boolean {
        return (code >= 48 && code <= 57) ||   // 0-9
               (code >= 65 && code <= 90) ||   // A-Z
               (code >= 97 && code <= 122);    // a-z
    }

    function toLowerCase(code: number): number {
        // If uppercase (65-90), convert to lowercase (97-122)
        return (code >= 65 && code <= 90) ? code + 32 : code;
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        const leftCode = s.charCodeAt(left);
        const rightCode = s.charCodeAt(right);

        // Skip non-alphanumeric from left
        if (!isAlphanumeric(leftCode)) {
            left++;
            continue;
        }

        // Skip non-alphanumeric from right
        if (!isAlphanumeric(rightCode)) {
            right--;
            continue;
        }

        // Compare characters (convert to lowercase only when needed)
        if (toLowerCase(leftCode) !== toLowerCase(rightCode)) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}
