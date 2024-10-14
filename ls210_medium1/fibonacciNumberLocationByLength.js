/**
 * The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such that the first two
 * numbers are 1 by definition, and each subsequent number is the sum of the two previous numbers.
 * Fibonacci numbers often appear in mathematics and nature.
 *
 * Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid
 * rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous,
 * especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.
 *
 * Write a function that calculates and returns the index of the first Fibonacci number that has the
 * number of digits specified by the argument. (The first Fibonacci number has an index of 1.)
 *
 * You may assume that the argument is always an integer greater than or equal to 2.
 *
 * Problem:
 *  - Count the number of iterations (index) until we find a number in fibonacci sequence with a specified length.
 *  - Return the FIRST number in the sequence with the specified length
 *  - The first index is the first one in the sequence
 *  - The fibonacci sequence is found by adding the current sum to the previous sum
 *  - The argument is always an integer greater than or equal to 2
 *
 * Questions:
 *  - None
 *
 * Data Structures:
 *  Input: Integer >= 2
 *  Output: Integer
 *  In-between: Array maybe
 *
 * Algorithm:
 *  1. Iterate until number of specified length is found
 *     - Three variables, two previous numbers, current sequence number and an index
 *     - Add two previous and store value as the current sequence
 *     - Reassign two previous
 *  2. Return index
 */

function findFibonacciIndexByLength(specifiedLength) {
  let index = 2n;
  let currentFib = 1n;
  let num1 = 1n;
  let num2 = 1n;

  while (BigInt(String(currentFib).length) !== specifiedLength) {
    index++;
    currentFib = num1 + num2;
    num1 = num2;
    num2 = currentFib;
  }

  return index;
}

console.log(findFibonacciIndexByLength(2n) === 7n); // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n); // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.
