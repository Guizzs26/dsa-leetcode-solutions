/*

Given an integer array nums, return true if any value 
appears at least twice in the array, and return false 
if every element is distinct.

*/

// First solution (in my opinion, the best)

/*
  Time complexity - O(n)
  Space complexity - O(n)
*/

// I could have used 'for of' to make it less verbose

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let hasDuplicate1 = (nums) => {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }

    set.add([nums[i]]);
  }
  return false;
};

// Second solution

/*
  Time complexity - O(n)
  Space complexity - O(n)
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let hasDuplicate2 = (nums) => {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const value = nums[i];

    if (obj[value]) {
      return true;
    }

    obj[value] = true;
  }
  return false;
};

// Thir solution (less verbose, very elegant but less explicit)

/*
  Time complexity - O(n)
  Space complexity - O(n)
*/

// < or !=

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let hasDuplicate3 = (nums) => {
  return new Set(nums).size != nums.length;
};

// Forth solution (worst, brute force)

/*
  Time complexity - O(n^2)
  Space complexity - O(1)
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let hasDuplicate4 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};
