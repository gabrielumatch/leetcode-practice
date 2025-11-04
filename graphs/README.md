# Graphs Problems

## Progress: 0/10 ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜

---

## 1. Number of Islands (Medium)
**LeetCode #200**

Given an `m x n` 2D binary grid which represents a map of `'1'`s (land) and `'0'`s (water), return the number of islands.

**Examples:**
```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

**Constraints:**
- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 300`
- `grid[i][j]` is `'0'` or `'1'`

---

## 2. Clone Graph (Medium)
**LeetCode #133**

Given a reference of a node in a connected undirected graph, return a deep copy (clone) of the graph.

**Examples:**
```
Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
Output: [[2,4],[1,3],[2,4],[1,3]]
Explanation: There are 4 nodes in the graph.

Input: adjList = [[]]
Output: [[]]
Explanation: The graph has only one node with val = 1.

Input: adjList = []
Output: []
```

**Constraints:**
- The number of nodes in the graph is in the range `[0, 100]`
- `1 <= Node.val <= 100`
- There are no repeated edges and no self-loops

---

## 3. Pacific Atlantic Water Flow (Medium)
**LeetCode #417**

Given an `m x n` rectangular island that borders both the Pacific Ocean and Atlantic Ocean. Return a list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.

**Examples:**
```
Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

Input: heights = [[1]]
Output: [[0,0]]
```

**Constraints:**
- `m == heights.length`
- `n == heights[r].length`
- `1 <= m, n <= 200`
- `0 <= heights[r][c] <= 10^5`

---

## 4. Course Schedule (Medium)
**LeetCode #207**

There are a total of `numCourses` courses you have to take, labeled from `0` to `numCourses - 1`. You are given an array `prerequisites` where `prerequisites[i] = [ai, bi]` indicates that you must take course `bi` first if you want to take course `ai`. Return `true` if you can finish all courses.

**Examples:**
```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
```

**Constraints:**
- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= 5000`
- `prerequisites[i].length == 2`

---

## 5. Course Schedule II (Medium)
**LeetCode #210**

Return the ordering of courses you should take to finish all courses. If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

**Examples:**
```
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are several valid orders: [0,1,2,3], [0,2,1,3].

Input: numCourses = 1, prerequisites = []
Output: [0]
```

**Constraints:**
- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= numCourses * (numCourses - 1)`

---

## 6. Graph Valid Tree (Medium)
**LeetCode #261** (Premium)

Given `n` nodes labeled from `0` to `n - 1` and a list of undirected edges, check whether these edges form a valid tree.

**Examples:**
```
Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
Output: true

Input: n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]
Output: false
```

**Constraints:**
- `1 <= n <= 2000`
- `0 <= edges.length <= 5000`
- `edges[i].length == 2`

---

## 7. Number of Connected Components in Undirected Graph (Medium)
**LeetCode #323** (Premium)

Given `n` nodes labeled from `0` to `n - 1` and a list of undirected edges, return the number of connected components in the graph.

**Examples:**
```
Input: n = 5, edges = [[0,1],[1,2],[3,4]]
Output: 2

Input: n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]
Output: 1
```

**Constraints:**
- `1 <= n <= 2000`
- `0 <= edges.length <= 5000`

---

## 8. Minimum Height Trees (Medium)
**LeetCode #310**

A tree is an undirected graph in which any two vertices are connected by exactly one path. Given a tree of `n` nodes labelled from `0` to `n - 1`, return a list of all MHTs (minimum height trees) root labels.

**Examples:**
```
Input: n = 4, edges = [[1,0],[1,2],[1,3]]
Output: [1]

Input: n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
Output: [3,4]
```

**Constraints:**
- `1 <= n <= 2 * 10^4`
- `edges.length == n - 1`

---

## 9. Word Ladder (Hard)
**LeetCode #127**

Given two words, `beginWord` and `endWord`, and a dictionary `wordList`, return the number of words in the shortest transformation sequence from `beginWord` to `endWord`, such that only one letter can be changed at a time and each transformed word must exist in the word list.

**Examples:**
```
Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
Output: 5
Explanation: One shortest transformation sequence is "hit" -> "hot" -> "dot" -> "dog" -> "cog", which is 5 words long.

Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"]
Output: 0
Explanation: The endWord "cog" is not in wordList, therefore there is no valid transformation sequence.
```

**Constraints:**
- `1 <= beginWord.length <= 10`
- `endWord.length == beginWord.length`
- `1 <= wordList.length <= 5000`

---

## 10. Alien Dictionary (Hard)
**LeetCode #269** (Premium)

There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you. You are given a list of strings `words` from the alien language's dictionary, where the strings in `words` are sorted lexicographically by the rules of this new language. Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules.

**Examples:**
```
Input: words = ["wrt","wrf","er","ett","rftt"]
Output: "wertf"

Input: words = ["z","x"]
Output: "zx"

Input: words = ["z","x","z"]
Output: ""
Explanation: The order is invalid, so return "".
```

**Constraints:**
- `1 <= words.length <= 100`
- `1 <= words[i].length <= 100`
- `words[i]` consists of only lowercase English letters

