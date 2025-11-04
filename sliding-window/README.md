# Sliding Window Problems

## Progress: 0/10 ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜

---

## 1. Maximum Average Subarray I (Easy)
**LeetCode #643**

Given an integer array `nums` and an integer `k`, find a contiguous subarray whose length is equal to `k` that has the maximum average value and return this value.

**Examples:**
```
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Input: nums = [5], k = 1
Output: 5.00000
```

**Constraints:**
- `n == nums.length`
- `1 <= k <= n <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

---

## 2. Longest Substring Without Repeating Characters (Medium)
**LeetCode #3**

Given a string `s`, find the length of the longest substring without repeating characters.

**Examples:**
```
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
```

**Constraints:**
- `0 <= s.length <= 5 * 10^4`
- `s` consists of English letters, digits, symbols and spaces

---

## 3. Minimum Size Subarray Sum (Medium)
**LeetCode #209**

Given an array of positive integers `nums` and a positive integer `target`, return the minimal length of a subarray whose sum is greater than or equal to `target`. If there is no such subarray, return `0` instead.

**Examples:**
```
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Input: target = 4, nums = [1,4,4]
Output: 1

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
```

**Constraints:**
- `1 <= target <= 10^9`
- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^4`

---

## 4. Fruit Into Baskets (Medium)
**LeetCode #904**

You are visiting a farm that has a single row of fruit trees. You have two baskets, and each basket can carry any amount of fruit, but you want each basket to only carry one type of fruit each. Return the maximum number of fruits you can collect.

**Examples:**
```
Input: fruits = [1,2,1]
Output: 3
Explanation: We can collect [1,2,1].

Input: fruits = [0,1,2,2]
Output: 3
Explanation: We can collect [1,2,2].

Input: fruits = [1,2,3,2,2]
Output: 4
Explanation: We can collect [2,3,2,2].
```

**Constraints:**
- `1 <= fruits.length <= 10^5`
- `0 <= fruits[i] < fruits.length`

---

## 5. Permutation in String (Medium)
**LeetCode #567**

Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.

**Examples:**
```
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Input: s1 = "ab", s2 = "eidboaoo"
Output: false
```

**Constraints:**
- `1 <= s1.length, s2.length <= 10^4`
- `s1` and `s2` consist of lowercase English letters

---

## 6. Find All Anagrams in a String (Medium)
**LeetCode #438**

Given two strings `s` and `p`, return an array of all the start indices of `p`'s anagrams in `s`.

**Examples:**
```
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation: The substring "cba" is an anagram of "abc" at index 0.
             The substring "bac" is an anagram of "abc" at index 6.

Input: s = "abab", p = "ab"
Output: [0,1,2]
```

**Constraints:**
- `1 <= s.length, p.length <= 3 * 10^4`
- `s` and `p` consist of lowercase English letters

---

## 7. Longest Repeating Character Replacement (Medium)
**LeetCode #424**

Given a string `s` and an integer `k`, you can choose any character of the string and change it to any other uppercase English character at most `k` times. Return the length of the longest substring containing the same letter you can get after performing the operations.

**Examples:**
```
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
```

**Constraints:**
- `1 <= s.length <= 10^5`
- `s` consists of only uppercase English letters
- `0 <= k <= s.length`

---

## 8. Minimum Window Substring (Hard)
**LeetCode #76**

Given two strings `s` and `t`, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string `""`.

**Examples:**
```
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Input: s = "a", t = "a"
Output: "a"

Input: s = "a", t = "aa"
Output: ""
```

**Constraints:**
- `m == s.length`
- `n == t.length`
- `1 <= m, n <= 10^5`

---

## 9. Sliding Window Maximum (Hard)
**LeetCode #239**

Given an array `nums` and a sliding window of size `k`, return the max value in each window as it moves from left to right.

**Examples:**
```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

Input: nums = [1], k = 1
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`
- `1 <= k <= nums.length`

---

## 10. Subarrays with K Different Integers (Hard)
**LeetCode #992**

Given an integer array `nums` and an integer `k`, return the number of good subarrays of `nums`. A good array is an array where the number of different integers in that array is exactly `k`.

**Examples:**
```
Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays: [1,2,1,3], [2,1,3], [1,3,4]
```

**Constraints:**
- `1 <= nums.length <= 2 * 10^4`
- `1 <= nums[i], k <= nums.length`

