/**
 * Write a program that solicits six numbers from the user and logs a message
 * that describes whether the sixth number appears among the first five numbers.
 */

function search() {
  let rlsync = require("readline-sync");
  let nums = [];
  nums.push(rlsync.question("Enter the 1st number: "));
  nums.push(rlsync.question("Enter the 2nd number: "));
  nums.push(rlsync.question("Enter the 3rd number: "));
  nums.push(rlsync.question("Enter the 4th number: "));
  nums.push(rlsync.question("Enter the 5th number: "));
  let searchNum = rlsync.question("Enter the last number: ");

  console.log(
    `The number ${searchNum} ${
      nums.includes(searchNum) ? "appears" : "does not appear"
    } in [${nums.join(", ")}]`
  );
}

search();

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].
