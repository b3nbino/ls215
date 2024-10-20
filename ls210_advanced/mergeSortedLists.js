/**
 * Write a function that takes two sorted arrays as arguments and returns a new array that contains all the
 * elements from both input arrays in sorted order.
 *
 * You may not provide any solution that requires you to sort the result array. You must build the result
 * array one element at a time in the proper order.
 *
 * Your solution should not mutate the input arrays.
 *
 * Problem:
 *  - Combine two sorted arrays each element at a time, in proper order
 *  - The result array cannot be sorted
 *  - Least -> greatest
 *  - Do not mutate the original arrays
 *  - The arrays may be of varied length
 *
 * Questions:
 *  - Will the arrays always contain integers? numbers?
 *  - Will the arrays ever be sparse?
 *  - Will the numbers ever be negative?
 *
 * Data Structures:
 *  Input: Two sorted arrays
 *  Output: One sorted array
 *  In-between: Arrays
 *
 * Algorithm:
 *  1. Create copies of the original arrays
 *  2. Iterate until all elements from both array copies have been added to a result array
 *     - Compare the current element and remove the smaller one from the array and add it to the result array
 *  3. Return result array
 */

function merge(arr1, arr2) {
  arr1 = arr1.slice();
  arr2 = arr2.slice();

  let resultArr = [];

  while (arr1.length > 0 || arr2.length > 0) {
    let arr1Element = arr1[0] || Infinity;
    let arr2Element = arr2[0] || Infinity;

    if (arr1Element >= arr2Element) {
      resultArr.push(arr2.shift());
    } else {
      resultArr.push(arr1.shift());
    }
  }

  return resultArr;
}

console.log(merge([1, 5, 9], [2, 6, 8])); // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2])); // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5])); // [1, 4, 5]
console.log(merge([1, 4, 5], [])); // [1, 4, 5]
