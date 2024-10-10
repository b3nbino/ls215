/**
 * Build a program that logs when the user will retire and
 * how many more years the user has to work until retirement.
 */

let rlsync = require("readline-sync");
let currAge = rlsync.question("What is your age? ");
let retirementAge = rlsync.question("At what age would you like to retire? ");
let year = new Date().getFullYear();

console.log(
  `\nIt's ${year}. You will retire in ${
    year + (retirementAge - currAge)
  }.\nYou have only ${retirementAge - currAge} years of work to go!`
);

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!
