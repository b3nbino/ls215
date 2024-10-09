/**
 * Write a program that asks the user to enter an integer greater than 0,
 * then asks if the user wants to determine the sum or the product of all
 * numbers between 1 and the entered integer, inclusive.

 * Examples:
 * Please enter an integer greater than 0: 5
 * Enter "s" to compute the sum, or "p" to compute the product. s

 * The sum of the integers between 1 and 5 is 15.

 * Please enter an integer greater than 0: 6
   Enter "s" to compute the sum, or "p" to compute the product. p

   The product of the integers between 1 and 6 is 720.

   Data Structures:
   Input: Two strings, one representing an integer, one representing "sum" or "product"
   Output: Log a string that tells the user either the sum or the product
   In-between: None

   Algorithm:
   1. Prompt user for integer greater than 0
   2. Prompt user for sum or product
   3. Iterate through all number from 1 to the user specified integer (inclusive)
      - Either add or multiply the current number to the result
   4. Log the result
 */

function sumOrProduct() {
  let rlsync = require("readline-sync");
  let int = parseInt(
    rlsync.question("Please enter an integer greater than 0: ")
  );
  let sOrP = rlsync.question(
    'Enter "s" to compute the sum, or "p" to compute the product. '
  );
  let result = 1;

  for (let i = 2; i <= int; i++) {
    if (sOrP === "s") {
      result += i;
    } else {
      result *= i;
    }
  }

  console.log(
    `\nThe product of the integers between 1 and ${int} is ${result}.`
  );
}

sumOrProduct();
