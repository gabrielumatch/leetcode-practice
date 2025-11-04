# Fast & Slow Pointers Problems

## Progress: 0/10 ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜

---

## 1. Linked List Cycle (Easy)
**LeetCode #141**

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

**Examples:**
```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Input: head = [1,2], pos = 0
Output: true

Input: head = [1], pos = -1
Output: false
```

**Constraints:**
- The number of nodes in the list is in the range `[0, 10^4]`
- `-10^5 <= Node.val <= 10^5`
- `pos` is `-1` or a valid index in the linked list

---

## 2. Linked List Cycle II (Medium)
**LeetCode #142**

Given the `head` of a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

**Examples:**
```
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1

Input: head = [1,2], pos = 0
Output: tail connects to node index 0

Input: head = [1], pos = -1
Output: no cycle
```

**Constraints:**
- The number of nodes in the list is in the range `[0, 10^4]`
- `-10^5 <= Node.val <= 10^5`
- `pos` is `-1` or a valid index in the linked list

---

## 3. Happy Number (Easy)
**LeetCode #202**

Write an algorithm to determine if a number `n` is happy. A happy number is a number defined by the following process: starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.

**Examples:**
```
Input: n = 19
Output: true
Explanation: 
1² + 9² = 82
8² + 2² = 68
6² + 8² = 100
1² + 0² + 0² = 1

Input: n = 2
Output: false
```

**Constraints:**
- `1 <= n <= 2^31 - 1`

---

## 4. Middle of the Linked List (Easy)
**LeetCode #876**

Given the `head` of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.

**Examples:**
```
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: The list has two middle nodes with values 3 and 4, we return the second one.
```

**Constraints:**
- The number of nodes in the list is in the range `[1, 100]`
- `1 <= Node.val <= 100`

---

## 5. Palindrome Linked List (Easy)
**LeetCode #234**

Given the `head` of a singly linked list, return `true` if it is a palindrome or `false` otherwise.

**Examples:**
```
Input: head = [1,2,2,1]
Output: true

Input: head = [1,2]
Output: false
```

**Constraints:**
- The number of nodes in the list is in the range `[1, 10^5]`
- `0 <= Node.val <= 9`

---

## 6. Remove Linked List Elements (Easy)
**LeetCode #203**

Given the `head` of a linked list and an integer `val`, remove all the nodes of the linked list that has `Node.val == val`, and return the new head.

**Examples:**
```
Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]

Input: head = [], val = 1
Output: []

Input: head = [7,7,7,7], val = 7
Output: []
```

**Constraints:**
- The number of nodes in the list is in the range `[0, 10^4]`
- `1 <= Node.val <= 50`
- `0 <= val <= 50`

---

## 7. Reorder List (Medium)
**LeetCode #143**

Given the head of a singly linked-list, reorder the list to be on the following form: `L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …`

**Examples:**
```
Input: head = [1,2,3,4]
Output: [1,4,2,3]

Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
```

**Constraints:**
- The number of nodes in the list is in the range `[1, 5 * 10^4]`
- `1 <= Node.val <= 1000`

---

## 8. Find the Duplicate Number (Medium)
**LeetCode #287**

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive. There is only one repeated number in `nums`, return this repeated number.

**Examples:**
```
Input: nums = [1,3,4,2,2]
Output: 2

Input: nums = [3,1,3,4,2]
Output: 3
```

**Constraints:**
- `1 <= n <= 10^5`
- `nums.length == n + 1`
- `1 <= nums[i] <= n`
- All the integers in `nums` appear only once except for precisely one integer which appears two or more times

---

## 9. Circular Array Loop (Medium)
**LeetCode #457**

You are playing a game involving a circular array of non-zero integers `nums`. Each `nums[i]` denotes the number of indices forward/backward you must move if you are located at index `i`. Return `true` if there is a loop in `nums`.

**Examples:**
```
Input: nums = [2,-1,1,2,2]
Output: true
Explanation: There is a cycle from index 0 -> 2 -> 3 -> 0 -> ...

Input: nums = [-1,-2,-3,-4,-5,6]
Output: false

Input: nums = [1,-1,5,1,4]
Output: true
```

**Constraints:**
- `1 <= nums.length <= 5000`
- `-1000 <= nums[i] <= 1000`
- `nums[i] != 0`

---

## 10. Rotate List (Medium)
**LeetCode #61**

Given the `head` of a linked list, rotate the list to the right by `k` places.

**Examples:**
```
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4
Output: [2,0,1]
```

**Constraints:**
- The number of nodes in the list is in the range `[0, 500]`
- `-100 <= Node.val <= 100`
- `0 <= k <= 2 * 10^9`

