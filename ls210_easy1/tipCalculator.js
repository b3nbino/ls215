/**
 * Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
 * The program must compute the tip, and then log both the tip and the total amount of the bill to the console.
 * You can ignore input validation and assume that the user will put in numbers.
 *
 * Example Output:
 * What is the bill? 200
 * What is the tip percentage? 15
 *
 * The tip is $30.00
 * The total is $230.00
 *
 * Questions:
 *  - Will the input always be positive integers?
 *
 * Data Structures:
 * Input: Two user input strings that represent positive integers
 * Output: Two(Four) strings to the console based on the example
 * In-between: None
 *
 * Algorithm:
 * 1. Prompt the user for the bill and percentage
 * 2. Calculate the tip amount
 * 3. Calculate the total bill
 * 4. Log results
 */

function calculateTip() {
  let rlsync = require("readline-sync");
  let bill = rlsync.question("What is the bill? ");
  let tipPercentage = rlsync.question("What is the tip percentage? ");
  let totalTip = (Number(bill) * (Number(tipPercentage) / 100)).toFixed(2);
  let totalBill = (Number(bill) + Number(totalTip)).toFixed(2);

  console.log(`\nThe tip is ${totalTip}`);
  console.log(`The total is ${totalBill}`);
}

calculateTip(); //See example
