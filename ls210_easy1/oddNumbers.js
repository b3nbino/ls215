/**
 * Log all odd numbers from 1 to 99, inclusive, to the console, with each number on a separate line.
 *
 * Input: none
 * Output: Integers logged to the console
 * Data Structures: none
 *
 * Algorithm:
 * 1. Iterate though odd integers 1-99
 *    - Log each integer
 */

function oddNumbers() {
  for (let i = 1; i < 100; i += 2) {
    console.log(i);
  }
}

oddNumbers();
