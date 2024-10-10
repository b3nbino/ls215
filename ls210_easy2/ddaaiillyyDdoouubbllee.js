/**
 * Write a function that takes a string argument and returns a new string that contains
 * the value of the original string with all consecutive duplicate characters collapsed
 * into a single character.
 *
 * Questions:
 *  - Will the input always be a string?
 *  - If there is an uppercase "A" next to a lowercase "a" should that be collapsed? To which one?
 *  - Should other things like consecutive symbols and spaces be collapsed?
 *
 * Data Structures:
 *  Input: String
 *  Output String
 *  In-between: Array of individual chars
 *
 * Algorithm:
 *  1. Split string into array of individual characters
 *  2. Filter array
 *     - If char before current char was the same as the current
 *       char, return false, otherwise return true
 *  3. Join array into string and return
 */

function crunch(str) {
  return str
    .split("")
    .filter((char, index, arr) => char !== arr[index - 1])
    .join("");
}

console.log(crunch("ddaaiillyy ddoouubbllee")); // "daily double"
console.log(crunch("4444abcabccba")); // "4abcabcba"
console.log(crunch("ggggggggggggggg")); // "g"
console.log(crunch("a")); // "a"
console.log(crunch("")); // ""
