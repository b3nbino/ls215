/**
 * Write a function that computes the sum of all numbers between 1 and some other number,
 * inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20,
 * the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).
 *
 * You may assume that the number passed in is an integer greater than 1.
 *
 * Rules:
 *  - Compute the SUM of all numbers between 1 and a supplied limit that are divisible by 3 or 5
 *  - The supplied limit is also included
 *  - Numbers should not be counted twice
 *  - The number passed in will be an integer greater than 1
 *
 * Questions:
 *  - Will the integer always be in a number format?
 *  - What if the integer is 2? Return 0?
 *
 * Data Structures:
 *  Input: An integer > 1
 *  Output: Integer
 *  In-between: Could use an array but easier to just use an int
 *
 * Algorithm:
 *  1. Iterate through all numbers from 1 to limit
 *     - If current number % 3 === 0 or current number % 5 === 0
 *       - Add to sum
 *  2. Return sum
 */

function multisum(limit) {
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(multisum(3)); // 3
console.log(multisum(5)); // 8
console.log(multisum(10)); // 33
console.log(multisum(1000)); // 234168
