/**
 * Write a function that rotates an array by moving the first element to the end of the array. Do not modify the original array.
 *
 * - If the input is not an array, return undefined.
 * - If the input is an empty array, return an empty array.
 *
 * Review the test cases below, then implement the solution accordingly.
 *
 * Data Structures:
 *  Input: Array
 *  Output: Array
 *  In-between: Array
 *
 * Algorithm:
 *  1. Use guard clauses for non-array and empty array inputs
 *  2. Make empty array to work with
 *  3. Store first array value
 *  4. Add remaining values
 *  5. Add copy of first element
 *  6. Return array
 */

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}

console.log(rotateArray([7, 3, 5, 2, 9, 1])); // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(["a", "b", "c"])); // ["b", "c", "a"]
console.log(rotateArray(["a"])); // ["a"]
console.log(rotateArray([1, "a", 3, "c"])); // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3])); // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([])); // []

// return `undefined` if the argument is not an array
console.log(rotateArray()); // undefined
console.log(rotateArray(1)); // undefined

// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array)); // [2, 3, 4, 1]
console.log(array); // [1, 2, 3, 4]
