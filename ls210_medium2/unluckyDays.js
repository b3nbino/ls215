/**
 * Write a function that takes a year as an argument and returns the number of 'Friday the 13ths' in that year.
 * You may assume that the year is greater than 1752 (when the modern Gregorian Calendar was adopted by the
 * United Kingdom). You may also assume that the same calendar will remain in use for the foreseeable future.
 *
 * Questions:
 *  - Will there always be a year argument that is an integer?
 *
 * Data Structures:
 *  Input: integer
 *  Output: integer
 *  In-between: Dates
 *
 * Algorithm:
 *  1. Iterate through the months of the year
 *     - If the thirteenth of the current month is a Friday
 *       - Increase the count by 1
 *  2. Return count
 */

function fridayThe13ths(year) {
  let count = 0;

  for (let i = 1; i <= 12; i++) {
    let currDate = new Date(`${i}/13/${year}`);

    if (currDate.getDay() === 5) {
      count++;
    }
  }

  return count;
}

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
