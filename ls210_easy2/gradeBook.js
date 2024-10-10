/**
 * Write a function that determines the mean (average) of the three scores
 * passed to it, and returns the letter associated with that grade.
 *
 * Numerical score letter grade list:
 *
 * 90 <= score <= 100: 'A'
 * 80 <= score < 90: 'B'
 * 70 <= score < 80: 'C'
 * 60 <= score < 70: 'D'
 * 0 <= score < 60: 'F'
 *
 * Tested values are all between 0 and 100. There is no need to check for negative values or values greater than 100.
 *
 * Data Structures:
 *  Input: Three grade integers
 *  Output: Letter string
 *  In-between: Array
 *
 * Algorithm:
 *  1. Find average
 *  2. Return letter grade
 */

function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;

  if (average > 89) {
    return "A";
  } else if (average > 79) {
    return "B";
  } else if (average > 69) {
    return "C";
  } else if (average > 59) {
    return "D";
  }
  return "F";
}

console.log(getGrade(95, 90, 93)); // "A"
console.log(getGrade(50, 50, 95)); // "D"
