/**
 * Write a function that takes a two-dimensional array as the argument and turns
 * it into a flat array with all duplicated elements removed. Treat numbers and
 * number strings (e.g., 1 and '1') as duplicates, and keep the one that comes
 * first in the result.
 *
 * Problem:
 *  - Input is a two dimensional array with a mixture of element types
 *  - Output is a flat array with "unique" elements
 *  - Numbers and strings with the same content should treated as the same, not unique
 *  - If a number and string are the same, the one that comes first should remain in the output
 *  - If the argument is a one dimensional array make the elements unique
 *  - There can be any amount of inner arrays
 *  - The inner array elements will always be strings and integers
 *
 * Questions:
 *  - Will there always be one argument?
 *  - What should happen if we get a one dimensional array?
 *  - Will we ever get a sparse array?
 *  - Can the strings and numbers present be any length?
 *  - Can the inner or outer arrays be any length?
 *  - Should we expect to receive an array containing more than two inner arrays?
 *  - Will the inner arrays ever contain non-string or non-integers?
 *
 * Algorithm:
 *  1. Guard clause for empty arrays
 *  2. Flatten array
 *  3. Iterate through array and construct new array
 *     - If new array does not contain similar element to current
 *       - Add current to new array
 *     - Else continue
 * 4. Return new array
 */

function flattenAndUnique(arr) {
  if (arr.length < 1) {
    return [];
  }

  arr = arr.flat(Infinity);
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.some((element) => element == arr[i])) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([3, 3, "l", "m", 1, "m", 3, "1"])); // [3, "l", "m", 1]
console.log(flattenAndUnique([[5, 3, "l", "m", 1, "m", 3, "1"]])); // [5, 3, "l", "m", 1]
console.log(
  flattenAndUnique([
    [1, 2, 3],
    ["3", 4, 5, "a"],
  ])
); // [1, 2, 3, 4, 5, 'a']
console.log(
  flattenAndUnique([
    [1, 2, 3],
    ["3", 4, 5, "a"],
    [1, 14, "g"],
  ])
); // [1, 2, 3, 4, 5, 'a', 14, "g"]
