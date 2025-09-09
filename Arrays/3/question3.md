# **✅ Check if the Array is Sorted II**

**Difficulty**: Easy  
**Score**: 100  
**Category**: Array Traversal / Logic Validation  

---

## **🧩 Problem Statement**

Given an array `nums` of `n` integers, determine whether it is sorted in **non-decreasing order**.  
Return `true` if the array is sorted, otherwise return `false`.

In simpler terms:  
> For every index `i`, the condition `nums[i] <= nums[i + 1]` must hold true throughout the array.

---

## **📘 Examples**

### **Example 1**
**Input**:  
```js
nums = [1, 2, 3, 4, 5]
```

**Output**:  
```js
true
```

**Explanation**:  
Every adjacent pair satisfies the condition `nums[i] <= nums[i+1]`.  
The array is strictly increasing, so we return `true`.

---

### **Example 2**
**Input**:  
```js
nums = [1, 2, 1, 4, 5]
```

**Output**:  
```js
false
```

**Explanation**:  
At index `i = 1`, we have `nums[1] = 2` and `nums[2] = 1`.  
Since `2 > 1`, the array breaks the non-decreasing rule.  
We return `false`.