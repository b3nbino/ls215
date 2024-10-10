/**
 * A double number is an even-length number whose left-side digits are exactly
 * the same as its right-side digits. For example, 44, 3333, 103103, and 7676
 * are all double numbers, whereas 444, 334433, and 107 are not.
 *
 * Write a function that returns the number provided as an argument multiplied by
 * two, unless the argument is a double number; otherwise, return the double number
 * as-is.
 *
 * Rules:
 *  - A daily double is a number with even length and the left and right sides are the same
 *
 * Questions:
 *  - Will the argument always be a positive integer?
 *
 * Data Structures:
 *  Input: Integer
 *  Output Integer
 *  In-between:
 *
 * Algorithm:
 *  1. If number length even and first half === second half
 *     Return number
 *  2. Return number * 2
 */

function twice(num) {
  let numString = String(num);
  if (
    numString.length % 2 === 0 &&
    numString.slice(0, numString.length / 2) ===
      numString.slice(numString.length / 2)
  ) {
    return num;
  }
  return num * 2;
}

console.log(twice(37)); // 74
console.log(twice(44)); // 44
console.log(twice(334433)); // 668866
console.log(twice(444)); // 888
console.log(twice(107)); // 214
console.log(twice(103103)); // 103103
console.log(twice(3333)); // 3333
console.log(twice(7676)); // 7676
