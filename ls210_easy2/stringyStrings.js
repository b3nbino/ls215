/**
 * Write a function that takes one argument, a positive integer, and returns a string of alternating
 * '1's and '0's, always starting with a '1'. The length of the string should match the given integer.
 *
 * Questions:
 *  - Will the argument always be a positive integer? What about 0?
 *
 * Data Structures:
 *  Input: Integer
 *  Output: String
 *  In-between: None
 *
 * Algorithm:
 *  1. Iterate from 0 to length of specified length
 *     - Add 1 to string for first char
 *     - Add 1 or 0 depending on what the last char was
 *  2. Return resulting string
 */

function stringy(strLength) {
  let result = "";
  while (result.length < strLength) {
    if (result.length === 0) {
      result += "1";
    } else {
      result += result[result.length - 1] === "1" ? "0" : "1";
    }
  }
  return result;
}

console.log(stringy(6)); // "101010"
console.log(stringy(9)); // "101010101"
console.log(stringy(4)); // "1010"
console.log(stringy(7)); // "1010101"
