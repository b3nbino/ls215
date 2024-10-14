/**
 * Write a recursive function that computes the nth Fibonacci number, where nth is an argument passed to the function.
 *
 * Questions:
 *  - Can the input be anything other than a positive integer?
 *
 * Data Structures:
 *  Input: Integer
 *  Output: Integer
 *  In-between: None
 *
 * Algorithm:
 *  1. Define the base case
 *     - n <= 1
 *  2. Define recursive call
 *     - return fibonacci(n - 1) + fibonacci(n)
 */

function fibonacci(index) {
  if (index === 1) {
    return 1;
  } else if (index < 1) {
    return 0;
  } else {
    return fibonacci(index - 1) + fibonacci(index - 2);
  }
}

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765
