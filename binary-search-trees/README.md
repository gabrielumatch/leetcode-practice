# Binary Search Trees Problems

## Progress: 0/10 ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜

---

## 1. Validate Binary Search Tree (Medium)
**LeetCode #98**

Given the `root` of a binary tree, determine if it is a valid binary search tree (BST).

**Examples:**
```
Input: root = [2,1,3]
Output: true

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

**Constraints:**
- The number of nodes in the tree is in the range `[1, 10^4]`
- `-2^31 <= Node.val <= 2^31 - 1`

---

## 2. Kth Smallest Element in a BST (Medium)
**LeetCode #230**

Given the `root` of a binary search tree, and an integer `k`, return the `kth` smallest value (1-indexed) of all the values of the nodes in the tree.

**Examples:**
```
Input: root = [3,1,4,null,2], k = 1
Output: 1

Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3
```

**Constraints:**
- The number of nodes in the tree is `n`
- `1 <= k <= n <= 10^4`
- `0 <= Node.val <= 10^4`

---

## 3. Search in a Binary Search Tree (Easy)
**LeetCode #700**

You are given the `root` of a binary search tree (BST) and an integer `val`. Find the node in the BST that the node's value equals `val` and return the subtree rooted with that node. If such a node does not exist, return `null`.

**Examples:**
```
Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Input: root = [4,2,7,1,3], val = 5
Output: []
```

**Constraints:**
- The number of nodes in the tree is in the range `[1, 5000]`
- `1 <= Node.val <= 10^7`
- `root` is a binary search tree
- `1 <= val <= 10^7`

---

## 4. Insert into a Binary Search Tree (Medium)
**LeetCode #701**

You are given the `root` node of a binary search tree (BST) and a `value` to insert into the tree. Return the root node of the BST after the insertion.

**Examples:**
```
Input: root = [4,2,7,1,3], val = 5
Output: [4,2,7,1,3,5]

Input: root = [40,20,60,10,30,50,70], val = 25
Output: [40,20,60,10,30,50,70,null,null,25]

Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
Output: [4,2,7,1,3,5]
```

**Constraints:**
- The number of nodes in the tree will be in the range `[0, 10^4]`
- `-10^8 <= Node.val <= 10^8`
- All the values are unique

---

## 5. Delete Node in a BST (Medium)
**LeetCode #450**

Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

**Examples:**
```
Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. We find the node, delete it, and replace with its successor 4.

Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.

Input: root = [], key = 0
Output: []
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 10^4]`
- `-10^5 <= Node.val <= 10^5`
- Each node has a unique value

---

## 6. Convert Sorted Array to Binary Search Tree (Easy)
**LeetCode #108**

Given an integer array `nums` where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

**Examples:**
```
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted.

Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.
```

**Constraints:**
- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in a strictly increasing order

---

## 7. Minimum Absolute Difference in BST (Easy)
**LeetCode #530**

Given the `root` of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

**Examples:**
```
Input: root = [4,2,6,1,3]
Output: 1

Input: root = [1,0,48,null,null,12,49]
Output: 1
```

**Constraints:**
- The number of nodes in the tree is in the range `[2, 10^4]`
- `0 <= Node.val <= 10^5`

---

## 8. Two Sum IV - Input is a BST (Easy)
**LeetCode #653**

Given the `root` of a Binary Search Tree and a target number `k`, return `true` if there exist two elements in the BST such that their sum is equal to the given target.

**Examples:**
```
Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

Input: root = [5,3,6,2,4,null,7], k = 28
Output: false
```

**Constraints:**
- The number of nodes in the tree is in the range `[1, 10^4]`
- `-10^4 <= Node.val <= 10^4`
- `root` is guaranteed to be a valid binary search tree
- `-10^5 <= k <= 10^5`

---

## 9. Lowest Common Ancestor of a BST (Medium)
**LeetCode #235**

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

**Examples:**
```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself.
```

**Constraints:**
- The number of nodes in the tree is in the range `[2, 10^5]`
- `-10^9 <= Node.val <= 10^9`
- All `Node.val` are unique

---

## 10. Trim a Binary Search Tree (Medium)
**LeetCode #669**

Given the `root` of a binary search tree and the lowest and highest boundaries as `low` and `high`, trim the tree so that all its elements lies in `[low, high]`.

**Examples:**
```
Input: root = [1,0,2], low = 1, high = 2
Output: [1,null,2]

Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
Output: [3,2,null,1]
```

**Constraints:**
- The number of nodes in the tree in the range `[1, 10^4]`
- `0 <= Node.val <= 10^4`
- The value of each node in the tree is unique
- `0 <= low <= high <= 10^4`

