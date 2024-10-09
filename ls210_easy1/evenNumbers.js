/**
 * Log all even numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
 *
 * Input: none
 * Output: Integers logged to the console
 * Data Structures: none
 *
 * Algorithm:
 * 1. Iterate though even integers 1-99
 *    - Log each integer
 */

function evenNumbers() {
  for (let i = 2; i < 99; i += 2) {
    console.log(i);
  }
}

evenNumbers();
