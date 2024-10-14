/**
 * A featured number (something unique to this exercise) is an odd number that is a multiple of 7, with
 * all of its digits occurring exactly once each. For example, 49 is a featured number, but 98 is not
 * (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not (the digit 3 appears twice).
 *
 * Write a function that takes an integer as an argument and returns the next featured number greater
 * than the integer. Issue an error message if there is no next featured number.
 *
 * NOTE: The largest possible featured number is 9876543201.
 *
 * Problem:
 *  - A featured number is odd, a multiple of seven, and each digit occurs only once
 *
 * Data Structures:
 *  Input: integer
 *  Output: integer
 *  In-between: None
 *
 * Algorithm:
 *  0. Guard clauses for < 1 and > 9876543200
 *  1. Iterate through odd multiples of 7 until we have a number greater than the input && each digit occurs only once
 *     - Increase the amount that we multiply by 2 every time, starting from 1
 *     - Use helper function to test for repeated digits
 *  2. Return the current number
 */

function repeatedDigits(num) {
  for (let i = 0; i < 10; i++) {
    let regex = new RegExp(i, "g");
    let matches = String(num).match(regex) || [];
    if (matches.length > 1) {
      return true;
    }
  }

  return false;
}

function featured(num) {
  if (num < 1) {
    return 7;
  } else if (num > 9876543200) {
    return "There is no possible number that fulfills those requirements.";
  }

  let currFeaturedNum = 7;
  let index = 1;

  while (currFeaturedNum <= num || repeatedDigits(currFeaturedNum)) {
    currFeaturedNum = index * 7;
    index += 2;
  }

  return currFeaturedNum;
}

console.log(featured(-1)); // 7
console.log(featured(0)); // 7
console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."
