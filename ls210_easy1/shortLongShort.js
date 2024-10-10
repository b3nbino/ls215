/**
 * Write a function that takes two strings as arguments, determines the length of the two strings,
 * and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again.
 * You may assume that the strings are of different lengths.
 *
 * Data Structures:
 * Input: Two strings of different lengths
 * Output: One string which includes the two input strings concatenated
 * In-between: None
 *
 * Algorithm:
 * 1. Determine which string is long and which is short
 * 2. Concatenate strings in sequence (short long short)
 * 3. Return result of concatenation
 */

function shortLongShort(str1, str2) {
  let long = str1.length > str2.length ? str1 : str2;
  let short = str1.length > str2.length ? str2 : str1;
  return short.concat(long).concat(short);
}

console.log(shortLongShort("abc", "defgh")); // "abcdefghabc"
console.log(shortLongShort("abcde", "fgh")); // "fghabcdefgh"
console.log(shortLongShort("", "xyz")); // "xyz"
