# Sorting Algorithms Problems

## Progress: 7/10 ✅✅✅✅✅✅✅⬜⬜⬜

---

## 1. Bubble Sort (Easy)
**Fundamental Algorithm**

Implement Bubble Sort to sort an array of integers in ascending order.

Bubble Sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed.

**Examples:**
```
Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]

Input: [5, 2, 8, 1, 9]
Output: [1, 2, 5, 8, 9]

Input: [1]
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 100`
- `-1000 <= nums[i] <= 1000`

---

## 2. Selection Sort (Easy)
**Fundamental Algorithm**

Implement Selection Sort to sort an array of integers in ascending order.

Selection Sort finds the minimum element from the unsorted portion and swaps it with the first element of the unsorted portion.

**Examples:**
```
Input: [64, 25, 12, 22, 11]
Output: [11, 12, 22, 25, 64]

Input: [5, 2, 8, 1, 9]
Output: [1, 2, 5, 8, 9]

Input: [3, 1, 4, 1, 5]
Output: [1, 1, 3, 4, 5]
```

**Constraints:**
- `1 <= nums.length <= 100`
- `-1000 <= nums[i] <= 1000`

---

## 3. Insertion Sort (Easy)
**Fundamental Algorithm**

Implement Insertion Sort to sort an array of integers in ascending order.

Insertion Sort builds the sorted array one item at a time by taking each element and inserting it into its correct position.

**Examples:**
```
Input: [12, 11, 13, 5, 6]
Output: [5, 6, 11, 12, 13]

Input: [5, 2, 8, 1, 9]
Output: [1, 2, 5, 8, 9]

Input: [1]
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 100`
- `-1000 <= nums[i] <= 1000`

---

## 4. Quick Sort (Medium)
**Fundamental Algorithm**

Implement Quick Sort to sort an array of integers in ascending order.

Quick Sort uses divide-and-conquer: pick a pivot, partition the array around the pivot, and recursively sort the sub-arrays.

**Examples:**
```
Input: [10, 7, 8, 9, 1, 5]
Output: [1, 5, 7, 8, 9, 10]

Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]

Input: [1]
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 100`
- `-1000 <= nums[i] <= 1000`

---

## 5. Merge Sort (Medium)
**Fundamental Algorithm**

Implement Merge Sort to sort an array of integers in ascending order.

Merge Sort uses divide-and-conquer: divide the array into halves, sort each half, then merge them back together.

**Examples:**
```
Input: [38, 27, 43, 3, 9, 82, 10]
Output: [3, 9, 10, 27, 38, 43, 82]

Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]

Input: [1]
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 100`
- `-1000 <= nums[i] <= 1000`

---

## 6. Heap Sort (Medium)
**Fundamental Algorithm**

Implement Heap Sort to sort an array of integers in ascending order.

Heap Sort builds a max heap from the array, then repeatedly extracts the maximum element and places it at the end of the sorted portion.

**Examples:**
```
Input: [12, 11, 13, 5, 6, 7]
Output: [5, 6, 7, 11, 12, 13]

Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]

Input: [1]
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 100`
- `-1000 <= nums[i] <= 1000`

---

## 7. Counting Sort (Easy)
**Fundamental Algorithm**

Implement Counting Sort to sort an array of integers in ascending order.

Counting Sort counts the number of occurrences of each value, then reconstructs the sorted array. Works well when the range of values is small.

**Examples:**
```
Input: [4, 2, 2, 8, 3, 3, 1]
Output: [1, 2, 2, 3, 3, 4, 8]

Input: [1, 4, 1, 2, 7, 5, 2]
Output: [1, 1, 2, 2, 4, 5, 7]

Input: [1]
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 100`
- Note: Counting Sort works best with non-negative integers in a small range

---

## 8. Radix Sort (Medium)
**Fundamental Algorithm**

Implement Radix Sort to sort an array of integers in ascending order.

Radix Sort sorts numbers by processing individual digits, starting from the least significant digit to the most significant digit.

**Examples:**
```
Input: [170, 45, 75, 90, 802, 24, 2, 66]
Output: [2, 24, 45, 66, 75, 90, 170, 802]

Input: [121, 432, 564, 23, 1, 45, 788]
Output: [1, 23, 45, 121, 432, 564, 788]

Input: [1]
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 10000`
- Note: Radix Sort works with non-negative integers

---

## 9. Shell Sort (Medium)
**Fundamental Algorithm**

Implement Shell Sort to sort an array of integers in ascending order.

Shell Sort is an optimized version of Insertion Sort that sorts elements far apart first, then gradually reduces the gap between elements.

**Examples:**
```
Input: [12, 34, 54, 2, 3]
Output: [2, 3, 12, 34, 54]

Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]

Input: [1]
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 100`
- `-1000 <= nums[i] <= 1000`

---

## 10. Comb Sort (Easy)
**Fundamental Algorithm**

Implement Comb Sort to sort an array of integers in ascending order.

Comb Sort is an improvement over Bubble Sort that uses a gap larger than 1, which decreases by a shrink factor (typically 1.3) in each pass.

**Examples:**
```
Input: [8, 4, 1, 56, 3, -44, 23, -6, 28, 0]
Output: [-44, -6, 0, 1, 3, 4, 8, 23, 28, 56]

Input: [64, 34, 25, 12, 22, 11, 90]
Output: [11, 12, 22, 25, 34, 64, 90]

Input: [1]
Output: [1]
```

**Constraints:**
- `1 <= nums.length <= 100`
- `-1000 <= nums[i] <= 1000`

