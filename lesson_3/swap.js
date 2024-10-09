/**
 * Write a function called swap that takes a string as an argument, and returns a new string,
 * where the alphabetic characters have taken the place of the numeric characters, and vice versa.
 *
 * Questions:
 *  - Will I always be given a string with characters in it?
 *  - Will there ever be an non-letters/numbers in the string?
 *  - Will there be uppercase letters in the string?
 *    - Should I also swap uppercase letters with numbers?
 *  - What should I do if a string has only letters or numbers?
 *
 * Input: string
 * Output: string
 * In-between: Use arrays to store and sort letters before adding to final string
 *
 * Algorithm:
 * 1. If empty string, return empty string
 * 2. Get an array of all of the letters and one of the numbers, reverse both
 * 3. Iterate through original string
 *    - If a letter is encountered
 *      - Check if there are any unused numbers
 *        - If so add number to final string
 *        - If not, add current letter to final string and remove it from the letters array
 *    - If a number is encountered do the same as above but with letters
 *    - If a symbol is encountered add it to the final string
 * 4. Return final string
 */

function swap(str) {
  if (str.length === 0) return "";

  let letters = str.match(/[a-z]/gi) || [];
  let numbers = str.match(/[0-9]/g) || [];

  letters = letters.reverse();
  numbers = numbers.reverse();

  let finalStr = "";

  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/i.test(str[i])) {
      if (numbers.length > 0) {
        finalStr += numbers.pop();
      } else {
        finalStr += str[i];
        letters.splice(letters.indexOf(str[i]), 1);
      }
    } else if (/[0-9]/.test(str[i])) {
      if (letters.length > 0) {
        finalStr += letters.pop();
      } else {
        finalStr += str[i];
        numbers.splice(numbers.indexOf(str[i]), 1);
      }
    } else {
      finalStr += str[i];
    }
  }

  return finalStr;
}

console.log(swap("1a2b3c") === "a1b2c3"); // true
console.log(swap("abcd123") === "123dabc"); // true
console.log(swap("1234abc") === "abc4123"); // true
console.log(swap("ab1CD23") === "12a3DbC"); // true
console.log(swap("123-4a#b$") === "ab3-41#2$"); // true
console.log(swap("abc") === "abc"); // true
console.log(swap("123") === "123"); // true
console.log(swap("") === ""); // true
