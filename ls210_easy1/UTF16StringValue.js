/**
 * Write a function that determines and returns the UTF-16 string value of a string passed in as an argument.
 * The UTF-16 string value is the sum of the UTF-16 values of every character in the string.
 * (You may use String.prototype.charCodeAt() to determine the UTF-16 value of a character.)
 *
 * Questions:
 *  - Will the input always be a string?
 *  - Do spaces have a utf-16 value? Should they be counted?
 *
 * Data Structures:
 *  Input: String
 *  Output Integer
 *  In-between: Array - gives us reduce
 *
 * Algorithm:
 *  1. Split string into array of chars
 *  2. Reduce string into sum of utf-16 values
 *     -Use charCodeAt() to find value
 *  3. Return reduced string
 */

function utf16Value(str) {
  return str
    .split("")
    .reduce((acc, currChar) => acc + currChar.charCodeAt(0), 0);
}

console.log(utf16Value("Four score")); // 984
console.log(utf16Value("Launch School")); // 1251
console.log(utf16Value("a")); // 97
console.log(utf16Value("")); // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9"; // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA)); // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA)); // 2811
