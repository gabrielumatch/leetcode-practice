export const description = `
**Based on Solution 1** - Different approach

**Changes:**
- Instead of two pointers, reverse entire string and compare
- Uses \`split('').reverse().join('')\`
- More readable but creates extra intermediate array
`;

// Reverse and Compare
export function solution(s: string): boolean {
    // Remove non-alphanumeric and convert to lowercase
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse and compare
    const reversed = clean.split('').reverse().join('');

    return clean === reversed;
}

