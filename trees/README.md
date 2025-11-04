# Trees (DFS/BFS) Problems

## Progress: 0/10 ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜

---

## 1. Maximum Depth of Binary Tree (Easy)
**LeetCode #104**

Given the `root` of a binary tree, return its maximum depth. A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Examples:**
```
Input: root = [3,9,20,null,null,15,7]
Output: 3

Input: root = [1,null,2]
Output: 2
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 10^4]`
- `-100 <= Node.val <= 100`

---

## 2. Invert Binary Tree (Easy)
**LeetCode #226**

Given the `root` of a binary tree, invert the tree, and return its root.

**Examples:**
```
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Input: root = [2,1,3]
Output: [2,3,1]

Input: root = []
Output: []
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 100]`
- `-100 <= Node.val <= 100`

---

## 3. Same Tree (Easy)
**LeetCode #100**

Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

**Examples:**
```
Input: p = [1,2,3], q = [1,2,3]
Output: true

Input: p = [1,2], q = [1,null,2]
Output: false

Input: p = [1,2,1], q = [1,1,2]
Output: false
```

**Constraints:**
- The number of nodes in both trees is in the range `[0, 100]`
- `-10^4 <= Node.val <= 10^4`

---

## 4. Symmetric Tree (Easy)
**LeetCode #101**

Given the `root` of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

**Examples:**
```
Input: root = [1,2,2,3,4,4,3]
Output: true

Input: root = [1,2,2,null,3,null,3]
Output: false
```

**Constraints:**
- The number of nodes in the tree is in the range `[1, 1000]`
- `-100 <= Node.val <= 100`

---

## 5. Binary Tree Level Order Traversal (Medium)
**LeetCode #102**

Given the `root` of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).

**Examples:**
```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Input: root = [1]
Output: [[1]]

Input: root = []
Output: []
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 2000]`
- `-1000 <= Node.val <= 1000`

---

## 6. Binary Tree Right Side View (Medium)
**LeetCode #199**

Given the `root` of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

**Examples:**
```
Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Input: root = [1,null,3]
Output: [1,3]

Input: root = []
Output: []
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 100]`
- `-100 <= Node.val <= 100`

---

## 7. Diameter of Binary Tree (Easy)
**LeetCode #543**

Given the `root` of a binary tree, return the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree.

**Examples:**
```
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Input: root = [1,2]
Output: 1
```

**Constraints:**
- The number of nodes in the tree is in the range `[1, 10^4]`
- `-100 <= Node.val <= 100`

---

## 8. Path Sum (Easy)
**LeetCode #112**

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.

**Examples:**
```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true
Explanation: The path 5 -> 4 -> 11 -> 2 sums to 22.

Input: root = [1,2,3], targetSum = 5
Output: false

Input: root = [], targetSum = 0
Output: false
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 5000]`
- `-1000 <= Node.val <= 1000`
- `-1000 <= targetSum <= 1000`

---

## 9. Lowest Common Ancestor of a Binary Tree (Medium)
**LeetCode #236**

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. The LCA is the lowest node that has both nodes as descendants.

**Examples:**
```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5.

Input: root = [1,2], p = 1, q = 2
Output: 1
```

**Constraints:**
- The number of nodes in the tree is in the range `[2, 10^5]`
- `-10^9 <= Node.val <= 10^9`
- All `Node.val` are unique

---

## 10. Binary Tree Zigzag Level Order Traversal (Medium)
**LeetCode #103**

Given the `root` of a binary tree, return the zigzag level order traversal of its nodes' values (i.e., from left to right, then right to left for the next level and alternate between).

**Examples:**
```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Input: root = [1]
Output: [[1]]

Input: root = []
Output: []
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 2000]`
- `-100 <= Node.val <= 100`

