/**
 * Set-based approach - Alternative solution
 * O(n) time, O(n) space (uses Set for tracking)
 *
 * Different approach: uses Set to track seen elements,
 * then rebuilds array in-place with unique elements
 */
export function solution(nums: number[]): number {
    if (nums.length === 0) return 0;

    const seen = new Set<number>();
    let writeIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (!seen.has(nums[i])) {
            seen.add(nums[i]);
            nums[writeIndex] = nums[i];
            writeIndex++;
        }
    }

    return writeIndex;
}
