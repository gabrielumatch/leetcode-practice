export const description = `
**Filter with Regex + Loop**

Filter alphanumeric characters using regex, then check palindrome.
- Uses \`filter()\` with regex test
- Creates intermediate array
- Faster than reverse, slower than inline validation
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

