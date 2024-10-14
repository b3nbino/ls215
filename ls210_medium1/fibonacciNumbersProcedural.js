/**
 * In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number.
 * In a language that is not optimized for recursion, some (but not all) recursive functions can be
 * extremely slow and may require massive quantities of memory and/or stack space. If you tested for
 * bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a
 * significant amount of time.
 *
 * Fortunately, every recursive function can be rewritten as a non-recursive (or procedural) function.
 *
 * Rewrite your recursive fibonacci function so that it computes its results without using recursion.
 *
 * Questions:
 *  - Will the input always be a positive integer?
 *  - What is the minimum input?
 *
 * Problem:
 *  - Find number in fib sequence at nth index
 *  - Use a procedural function AKA non-recursive
 *
 * Data Structures:
 *  Input: Integer
 *  Output : Integer
 *  In-between: Possible array
 *
 * Algorithm:
 *  1. Iterate until nth iteration
 *     - Save current fibonacci number
 *     - Assign two previous numbers
 *  3. Return current fib number
 */

function fibonacci(nth) {
  if (nth === 0) {
    return 0;
  } else if (nth < 3) {
    return 1;
  }

  let currentFib;
  let num1 = 1;
  let num2 = 1;

  for (let i = 3; i <= nth; i++) {
    currentFib = num1 + num2;
    num1 = num2;
    num2 = currentFib;
  }

  return currentFib;
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
