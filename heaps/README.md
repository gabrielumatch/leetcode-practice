# Heaps (Priority Queues) Problems

## Progress: 0/10 ⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜

---

## 1. Kth Largest Element in an Array (Medium)
**LeetCode #215**

Given an integer array `nums` and an integer `k`, return the `kth` largest element in the array. Note that it is the `kth` largest element in the sorted order, not the `kth` distinct element.

**Examples:**
```
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
```

**Constraints:**
- `1 <= k <= nums.length <= 10^5`
- `-10^4 <= nums[i] <= 10^4`

---

## 2. Last Stone Weight (Easy)
**LeetCode #1046**

You are given an array of integers `stones` where `stones[i]` is the weight of the `ith` stone. We are playing a game with the stones: on each turn, we choose the heaviest two stones and smash them together.

**Examples:**
```
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1]
We combine 2 and 4 to get 2 so the array converts to [2,1,1,1]
We combine 2 and 1 to get 1 so the array converts to [1,1,1]
We combine 1 and 1 to get 0 so the array converts to [1]
Output is 1.

Input: stones = [1]
Output: 1
```

**Constraints:**
- `1 <= stones.length <= 30`
- `1 <= stones[i] <= 1000`

---

## 3. K Closest Points to Origin (Medium)
**LeetCode #973**

Given an array of `points` where `points[i] = [xi, yi]` represents a point on the X-Y plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`.

**Examples:**
```
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation: The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.

Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
```

**Constraints:**
- `1 <= k <= points.length <= 10^4`
- `-10^4 < xi, yi < 10^4`

---

## 4. Top K Frequent Words (Medium)
**LeetCode #692**

Given an array of strings `words` and an integer `k`, return the `k` most frequent strings. Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

**Examples:**
```
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.

Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
```

**Constraints:**
- `1 <= words.length <= 500`
- `1 <= words[i].length <= 10`
- `words[i]` consists of lowercase English letters
- `k` is in the range `[1, The number of unique words[i]]`

---

## 5. Find K Pairs with Smallest Sums (Medium)
**LeetCode #373**

You are given two integer arrays `nums1` and `nums2` sorted in ascending order and an integer `k`. Define a pair `(u, v)` which consists of one element from the first array and one element from the second array. Return the `k` pairs with the smallest sums.

**Examples:**
```
Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
Output: [[1,2],[1,4],[1,6]]
Explanation: The first 3 pairs are returned from the sequence: [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
Output: [[1,1],[1,1]]
```

**Constraints:**
- `1 <= nums1.length, nums2.length <= 10^5`
- `-10^9 <= nums1[i], nums2[i] <= 10^9`
- `nums1` and `nums2` are sorted in ascending order
- `1 <= k <= 10^4`

---

## 6. Reorganize String (Medium)
**LeetCode #767**

Given a string `s`, rearrange the characters of `s` so that any two adjacent characters are not the same. Return any possible rearrangement of `s` or return `""` if not possible.

**Examples:**
```
Input: s = "aab"
Output: "aba"

Input: s = "aaab"
Output: ""
```

**Constraints:**
- `1 <= s.length <= 500`
- `s` consists of lowercase English letters

---

## 7. Task Scheduler (Medium)
**LeetCode #621**

Given a characters array `tasks`, representing the tasks a CPU needs to do, where each letter represents a different task. Tasks could be done in any order. Each task takes one unit of time. For each unit of time, the CPU could complete either one task or just be idle. However, there is a non-negative integer `n` that represents the cooldown period between two same tasks.

**Examples:**
```
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B

Input: tasks = ["A","A","A","B","B","B"], n = 0
Output: 6
Explanation: No idle time is needed.

Input: tasks = ["A","A","A","A","A","A","B","C","D","E","F","G"], n = 2
Output: 16
```

**Constraints:**
- `1 <= task.length <= 10^4`
- `tasks[i]` is upper-case English letter
- The integer `n` is in the range `[0, 100]`

---

## 8. Merge k Sorted Lists (Hard)
**LeetCode #23**

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it.

**Examples:**
```
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]

Input: lists = []
Output: []

Input: lists = [[]]
Output: []
```

**Constraints:**
- `k == lists.length`
- `0 <= k <= 10^4`
- `0 <= lists[i].length <= 500`
- `-10^4 <= lists[i][j] <= 10^4`

---

## 9. Find Median from Data Stream (Hard)
**LeetCode #295**

The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values. Implement the MedianFinder class.

**Examples:**
```
Input:
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output:
[null, null, null, 1.5, null, 2.0]

Explanation:
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0
```

**Constraints:**
- `-10^5 <= num <= 10^5`
- There will be at least one element before calling `findMedian`

---

## 10. Sliding Window Median (Hard)
**LeetCode #480**

The median is the middle value in an ordered integer list. Given an array `nums` and an integer `k`, there is a sliding window of size `k` which is moving from the very left of the array to the very right. Return the median array for each window in the original array.

**Examples:**
```
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]

Input: nums = [1,2,3,4,2,3,1,4,2], k = 3
Output: [2.00000,3.00000,3.00000,3.00000,2.00000,3.00000,2.00000]
```

**Constraints:**
- `1 <= k <= nums.length <= 10^5`
- `-2^31 <= nums[i] <= 2^31 - 1`

