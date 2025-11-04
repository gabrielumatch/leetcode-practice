export const description = `
**Based on Solution 1** - Filter first approach

**Changes:**
- Uses \`filter(c => /[a-z0-9]/.test(c))\` instead of \`replace()\`
- Creates filtered array, then compares indices
- Avoids string concatenation from replace
`;

// Filter alphanumeric then check
export function solution(s: string): boolean {
    // Filter only alphanumeric and convert to lowercase
    const chars = s.toLowerCase().split('').filter(c => /[a-z0-9]/.test(c));

    // Check if palindrome
    for (let i = 0; i < Math.floor(chars.length / 2); i++) {
        if (chars[i] !== chars[chars.length - 1 - i]) {
            return false;
        }
    }

    return true;
}

