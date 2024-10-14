/**
 * Write a function that takes a string and returns an object containing the following three properties:
 *
 * - the percentage of characters in the string that are lowercase letters
 * - the percentage of characters that are uppercase letters
 * - the percentage of characters that are neither
 *
 * You may assume that the string will always contain at least one character.
 *
 * Data Structures:
 *  Input: String
 *  Output: Object
 *  In-between: Object, strings
 *
 * Algorithm:
 *  1. Collect each character type as an array
 *  2. Assign object properties based on length of array compared to the length of the string
 *  3. Return object
 */

function letterPercentages(str) {
  let percentages = { lowercase: "", uppercase: "", neither: "" };
  let lowercaseLetters = str.match(/[a-z]/g) || [];
  let uppercaseLetters = str.match(/[A-Z]/g) || [];
  let otherChars = str.match(/[^A-Z]/gi) || [];

  percentages.lowercase = (
    (lowercaseLetters.length / str.length) *
    100
  ).toFixed(2);
  percentages.uppercase = (
    (uppercaseLetters.length / str.length) *
    100
  ).toFixed(2);
  percentages.neither = ((otherChars.length / str.length) * 100).toFixed(2);

  return percentages;
}

console.log(letterPercentages("abCdef 123"));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages("AbCd +Ef"));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages("123"));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
