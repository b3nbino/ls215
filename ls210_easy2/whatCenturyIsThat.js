/**
 * Write a function that takes a year as input and returns the century.
 * The return value should be a string that begins with the century number,
 * and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
 *
 * New centuries begin in years that end with 01. So, the years 1901 - 2000
 * comprise the 20th century.
 *
 * Data Structures:
 *  Input: Integer
 *  Output: String
 *  In-between: None
 *
 * Algorithm:
 *  1. Iterate from 0 adding 100 until year is less than index
 *  2. Once year is less than index, index / 100 === century
 *  3. Add ending and return
 */

function century(year) {
  let index = 0;

  while (index < year) {
    index += 100;
  }

  index = String(index / 100);
  return (
    index +
    (index[index.length - 1] === "1"
      ? "st"
      : index[index.length - 1] === "2"
      ? "nd"
      : index[index.length - 1] === "3"
      ? "rd"
      : "th")
  );
}

console.log(century(2000)); // "20th"
console.log(century(2001)); // "21st"
console.log(century(1965)); // "20th"
console.log(century(256)); // "3rd"
console.log(century(5)); // "1st"
console.log(century(10103)); // "102nd"
// console.log(century(1052)); // "11th"
// console.log(century(1127)); // "12th"
// console.log(century(11201)); // "113th"
