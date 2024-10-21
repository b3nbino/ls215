/**
 * Given an array of integers, nums, return the third largest number in the array. If
 * the third largest number does not exist, return the greatest number.
 *
 * You are not allowed to sort the array.
 *
 * Problem:
 *  - Input is an array of integers
 *  - Output is the third largest number in the array
 *  - If there is not a third largest, return the greatest number
 *
 * Questions:
 *  - Will the input always be an array? of integers?
 *  - Will the input ever be a sparse array? empty?
 *  - Will the integers always be greater than zero? ever Infinity or NaN?
 *  - Are two of the same integer counter separately? ex: [3, 3, 1, 2, 5, 5] --> ?
 *  - Will the integers always appear in order?
 *  - Can a copy of the array be sorted?
 *  - Can a new array be constructed in sorted order?
 *
 * Data Structures:
 *  Input: an array of ordered integers
 *  Output: An integer
 *  In-between: Arrays
 *
 * Algorithm:
 *  1. Guard clause: if array has less than three elements return thirdMax
 *  2. Iterate through all numbers counting the new ones
 *    - If the current number is the third new one return it
 *  3. Return max from nums
 */

function thirdMax(nums) {
  if (nums.length < 3) return Math.max(...nums);

  let newNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (newNums.includes(nums[i])) {
      continue;
    }

    newNums.push(nums[i]);
    if (newNums.length === 3) {
      return nums[i];
    }
  }

  return Math.max(...nums);
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([100, 80, 12, 5, 2])); // 12
console.log(thirdMax([99, 71])); // 99
console.log(thirdMax([13])); // 13
console.log(thirdMax([13, 13, 4])); // 13
console.log(thirdMax([13, 13, 4, 9])); // 9
