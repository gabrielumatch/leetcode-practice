# Tree Fundamentals Problems

## Progress: 0/10 ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜

---

## 1. Create Binary Tree Node (Easy)
**Fundamental Operation**

Create a function that creates a new binary tree node with a given value and null left/right children.

**Examples:**
```
Input: 5
Output: TreeNode { val: 5, left: null, right: null }

Input: 10
Output: TreeNode { val: 10, left: null, right: null }
```

**Constraints:**
- `-1000 <= val <= 1000`

---

## 2. Insert Node into Binary Tree (Easy)
**Fundamental Operation**

Given a binary tree and a value, insert the value as a new node. Use level-order insertion (insert at the first available position from left to right).

**Examples:**
```
Input: root = [1, 2, 3], val = 4
Output: [1, 2, 3, 4]
Explanation: Insert 4 as left child of 2

Input: root = [1, 2], val = 3
Output: [1, 2, 3]
Explanation: Insert 3 as left child of 2

Input: root = null, val = 1
Output: [1]
Explanation: Create root node
```

**Constraints:**
- The number of nodes in the tree will be in the range `[0, 100]`
- `-1000 <= val <= 1000`

---

## 3. Search Node in Binary Tree (Easy)
**Fundamental Operation**

Given a binary tree and a value, return the node with that value if it exists, otherwise return null.

**Examples:**
```
Input: root = [4, 2, 7, 1, 3], val = 2
Output: TreeNode { val: 2, left: TreeNode(1), right: TreeNode(3) }

Input: root = [4, 2, 7, 1, 3], val = 5
Output: null

Input: root = [1], val = 1
Output: TreeNode { val: 1, left: null, right: null }
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 100]`
- `1 <= val <= 100`

---

## 4. Delete Node from Binary Tree (Medium)
**Fundamental Operation**

Given a binary tree and a value, delete the node with that value. Replace it with the deepest rightmost node.

**Examples:**
```
Input: root = [5, 3, 6, 2, 4, null, 7], key = 3
Output: [5, 4, 6, 2, null, null, 7]
Explanation: Replace 3 with deepest rightmost node (4)

Input: root = [5, 3, 6, 2, 4, null, 7], key = 0
Output: [5, 3, 6, 2, 4, null, 7]
Explanation: Key not found, return original tree

Input: root = [], key = 0
Output: []
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 10^4]`
- `-10^5 <= Node.val <= 10^5`
- Each node has a unique value

---

## 5. Calculate Tree Height (Easy)
**Fundamental Operation**

Given a binary tree, return its height (maximum depth). The height of a tree is the number of nodes along the longest path from the root to a leaf node.

**Examples:**
```
Input: root = [3, 9, 20, null, null, 15, 7]
Output: 3
Explanation: Longest path: 3 -> 20 -> 7 (3 nodes)

Input: root = [1, null, 2]
Output: 2
Explanation: Longest path: 1 -> 2 (2 nodes)

Input: root = []
Output: 0
Explanation: Empty tree has height 0
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 10^4]`
- `-100 <= Node.val <= 100`

---

## 6. Count Nodes in Binary Tree (Easy)
**Fundamental Operation**

Given a binary tree, return the total number of nodes in the tree.

**Examples:**
```
Input: root = [1, 2, 3, 4, 5, 6, 7]
Output: 7

Input: root = [1, 2]
Output: 2

Input: root = []
Output: 0
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 10^4]`
- `-100 <= Node.val <= 100`

---

## 7. Inorder Traversal (Easy)
**Fundamental Operation**

Given a binary tree, return the inorder traversal of its nodes' values (left, root, right).

**Examples:**
```
Input: root = [1, null, 2, 3]
Output: [1, 3, 2]
Explanation: 
  1
   \
    2
   /
  3

Input: root = []
Output: []

Input: root = [1]
Output: [1]
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 100]`
- `-100 <= Node.val <= 100`

---

## 8. Preorder Traversal (Easy)
**Fundamental Operation**

Given a binary tree, return the preorder traversal of its nodes' values (root, left, right).

**Examples:**
```
Input: root = [1, null, 2, 3]
Output: [1, 2, 3]
Explanation:
  1
   \
    2
   /
  3

Input: root = []
Output: []

Input: root = [1, 2, 3]
Output: [1, 2, 3]
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 100]`
- `-100 <= Node.val <= 100`

---

## 9. Postorder Traversal (Easy)
**Fundamental Operation**

Given a binary tree, return the postorder traversal of its nodes' values (left, right, root).

**Examples:**
```
Input: root = [1, null, 2, 3]
Output: [3, 2, 1]
Explanation:
  1
   \
    2
   /
  3

Input: root = []
Output: []

Input: root = [1, 2, 3]
Output: [2, 3, 1]
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 100]`
- `-100 <= Node.val <= 100`

---

## 10. Level Order Traversal (Easy)
**Fundamental Operation**

Given a binary tree, return the level order traversal of its nodes' values (breadth-first search, left to right, level by level).

**Examples:**
```
Input: root = [3, 9, 20, null, null, 15, 7]
Output: [[3], [9, 20], [15, 7]]
Explanation:
     3
   /   \
  9    20
       /  \
      15   7

Input: root = [1]
Output: [[1]]

Input: root = []
Output: []
```

**Constraints:**
- The number of nodes in the tree is in the range `[0, 2000]`
- `-1000 <= Node.val <= 1000`

