export const description = `
**Two Pointers - Classic**

Baseline approach: clean the string first, then use two pointers.
- Uses \`replace(/[^a-z0-9]/g, '')\` to clean
- Creates intermediate cleaned string
- Simple and readable
`;

// Two Pointers
export function solution(s: string): boolean {
    // Remove non-alphanumeric and convert to lowercase
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = clean.length - 1;

    while (left < right) {
        if (clean[left] !== clean[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

