# Two Pointers Problems

## Progress: 1/10 ✅⬜⬜⬜⬜⬜⬜⬜⬜⬜

---

## 1. Valid Palindrome (Easy)
**LeetCode #125**

Given a string `s`, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

**Examples:**
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Input: s = " "
Output: true
Explanation: Empty string is a valid palindrome.
```

**Constraints:**
- `1 <= s.length <= 2 * 10^5`
- `s` consists only of printable ASCII characters

---

## 2. Two Sum II - Input Array Is Sorted (Medium)
**LeetCode #167**

Given a 1-indexed array of integers `numbers` that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number.

**Examples:**
```
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2.

Input: numbers = [2,3,4], target = 6
Output: [1,3]

Input: numbers = [-1,0], target = -1
Output: [1,2]
```

**Constraints:**
- `2 <= numbers.length <= 3 * 10^4`
- `-1000 <= numbers[i] <= 1000`
- `numbers` is sorted in non-decreasing order
- `-1000 <= target <= 1000`

---

## 3. ✅ Reverse Only Letters (Easy)
**LeetCode #917** | **Solved** ✓

Given a string `s`, reverse the string according to the following rules: all non-letter characters stay in their original position, and all letters reverse their positions.

**Examples:**
```
Input: s = "ab-cd"
Output: "dc-ba"

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo-c1tse-Lgn=teT!"
```

**Constraints:**
- `1 <= s.length <= 100`
- `s` consists of characters with ASCII values in the range `[33, 122]`

---

## 4. Remove Duplicates from Sorted Array (Easy)
**LeetCode #26**

Given an integer array `nums` sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. Return the number of unique elements.

**Examples:**
```
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2.

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
```

**Constraints:**
- `1 <= nums.length <= 3 * 10^4`
- `-100 <= nums[i] <= 100`
- `nums` is sorted in non-decreasing order

---

## 5. Move Zeroes (Easy)
**LeetCode #283**

Given an integer array `nums`, move all `0`'s to the end of it while maintaining the relative order of the non-zero elements.

**Examples:**
```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Input: nums = [0]
Output: [0]
```

**Constraints:**
- `1 <= nums.length <= 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`

---

## 6. Container With Most Water (Medium)
**LeetCode #11**

Given `n` non-negative integers `height` where each represents a point at coordinate `(i, height[i])`. Find two lines that together with the x-axis form a container that holds the most water.

**Examples:**
```
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The vertical lines are at index 1 and 8, area = min(8,7) * (8-1) = 49

Input: height = [1,1]
Output: 1
```

**Constraints:**
- `n == height.length`
- `2 <= n <= 10^5`
- `0 <= height[i] <= 10^4`

---

## 7. 3Sum (Medium)
**LeetCode #15**

Given an integer array `nums`, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

**Examples:**
```
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Input: nums = [0,1,1]
Output: []

Input: nums = [0,0,0]
Output: [[0,0,0]]
```

**Constraints:**
- `3 <= nums.length <= 3000`
- `-10^5 <= nums[i] <= 10^5`

---

## 8. Trapping Rain Water (Hard)
**LeetCode #42**

Given `n` non-negative integers representing an elevation map where the width of each bar is `1`, compute how much water it can trap after raining.

**Examples:**
```
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The elevation map traps 6 units of rain water.

Input: height = [4,2,0,3,2,5]
Output: 9
```

**Constraints:**
- `n == height.length`
- `1 <= n <= 2 * 10^4`
- `0 <= height[i] <= 10^5`

---

## 9. Sort Colors (Medium)
**LeetCode #75**

Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue (represented by `0`, `1`, and `2`).

**Examples:**
```
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Input: nums = [2,0,1]
Output: [0,1,2]
```

**Constraints:**
- `n == nums.length`
- `1 <= n <= 300`
- `nums[i]` is either `0`, `1`, or `2`

---

## 10. Remove Nth Node From End of List (Medium)
**LeetCode #19**

Given the `head` of a linked list, remove the `nth` node from the end of the list and return its head.

**Examples:**
```
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Input: head = [1], n = 1
Output: []

Input: head = [1,2], n = 1
Output: [1]
```

**Constraints:**
- The number of nodes in the list is `sz`
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

