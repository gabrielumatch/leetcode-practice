# Bit Manipulation Problems

## Progress: 0/10 ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜

---

## 1. Single Number (Easy)
**LeetCode #136**

Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.

**Examples:**
```
Input: nums = [2,2,1]
Output: 1

Input: nums = [4,1,2,1,2]
Output: 4

Input: nums = [1]
Output: 1
```

**Constraints:**
- `1 <= nums.length <= 3 * 10^4`
- `-3 * 10^4 <= nums[i] <= 3 * 10^4`
- Each element in the array appears twice except for one element which appears only once

---

## 2. Number of 1 Bits (Easy)
**LeetCode #191**

Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

**Examples:**
```
Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string has a total of three '1' bits.

Input: n = 00000000000000000000000010000000
Output: 1

Input: n = 11111111111111111111111111111101
Output: 31
```

**Constraints:**
- The input must be a binary string of length `32`

---

## 3. Counting Bits (Easy)
**LeetCode #338**

Given an integer `n`, return an array `ans` of length `n + 1` such that for each `i` (`0 <= i <= n`), `ans[i]` is the number of `1`'s in the binary representation of `i`.

**Examples:**
```
Input: n = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

Input: n = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101
```

**Constraints:**
- `0 <= n <= 10^5`

---

## 4. Reverse Bits (Easy)
**LeetCode #190**

Reverse bits of a given 32 bits unsigned integer.

**Examples:**
```
Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)

Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
```

**Constraints:**
- The input must be a binary string of length `32`

---

## 5. Missing Number (Easy)
**LeetCode #268**

Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array.

**Examples:**
```
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
```

**Constraints:**
- `n == nums.length`
- `1 <= n <= 10^4`
- `0 <= nums[i] <= n`
- All the numbers of `nums` are unique

---

## 6. Power of Two (Easy)
**LeetCode #231**

Given an integer `n`, return `true` if it is a power of two. Otherwise, return `false`. An integer `n` is a power of two, if there exists an integer `x` such that `n == 2^x`.

**Examples:**
```
Input: n = 1
Output: true
Explanation: 2^0 = 1

Input: n = 16
Output: true
Explanation: 2^4 = 16

Input: n = 3
Output: false
```

**Constraints:**
- `-2^31 <= n <= 2^31 - 1`

---

## 7. Sum of Two Integers (Medium)
**LeetCode #371**

Given two integers `a` and `b`, return the sum of the two integers without using the operators `+` and `-`.

**Examples:**
```
Input: a = 1, b = 2
Output: 3

Input: a = 2, b = 3
Output: 5
```

**Constraints:**
- `-1000 <= a, b <= 1000`

---

## 8. Bitwise AND of Numbers Range (Medium)
**LeetCode #201**

Given two integers `left` and `right` that represent the range `[left, right]`, return the bitwise AND of all numbers in this range, inclusive.

**Examples:**
```
Input: left = 5, right = 7
Output: 4
Explanation: 5 (101), 6 (110), 7 (111). The bitwise AND is 100 = 4.

Input: left = 0, right = 0
Output: 0

Input: left = 1, right = 2147483647
Output: 0
```

**Constraints:**
- `0 <= left <= right <= 2^31 - 1`

---

## 9. Single Number II (Medium)
**LeetCode #137**

Given an integer array `nums` where every element appears three times except for one, which appears exactly once. Find the single element and return it. You must implement a solution with a linear runtime complexity and use only constant extra space.

**Examples:**
```
Input: nums = [2,2,3,2]
Output: 3

Input: nums = [0,1,0,1,0,1,99]
Output: 99
```

**Constraints:**
- `1 <= nums.length <= 3 * 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`
- Each element in `nums` appears exactly three times except for one element which appears once

---

## 10. Single Number III (Medium)
**LeetCode #260**

Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order. You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

**Examples:**
```
Input: nums = [1,2,1,3,2,5]
Output: [3,5]
Explanation: [5, 3] is also a valid answer.

Input: nums = [-1,0]
Output: [-1,0]

Input: nums = [0,1]
Output: [1,0]
```

**Constraints:**
- `2 <= nums.length <= 3 * 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`
- Each integer in `nums` will appear twice, only two integers will appear once

