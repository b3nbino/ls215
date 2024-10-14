/**
 * Write a function that computes the difference between the square of the sum of the first n positive
 * integers and the sum of the squares of the first n positive integers.
 *
 * Problem:
 *  - Add all numbers from 1 to n then square that
 *  - Square all from 1 to n then add them together
 *  - Find the difference between the two numbers
 *
 * Questions:
 *  - Will the input always be a positive integer?
 *
 * Data Structures:
 *  Input: integer
 *  Output: integer
 *  In-between: array
 *
 * Algorithm:
 *  1. Fill an array with number from 1 - n inclusive and create two copies
 *  2. Do math on each array
 *     - For array 1 square each number then add them together
 *     - For array 2 add all numbers then square the sum
 *  3. Return absolute difference of results
 */

function sumSquareDifference(num) {
  let integers = [];
  for (let i = 1; i <= num; i++) {
    integers.push(i);
  }

  let sumOfSquares = integers.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
  let squareOfSums = Math.pow(
    integers.reduce((acc, curr) => acc + curr),
    2
  );

  return Math.abs(sumOfSquares - squareOfSums);
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
