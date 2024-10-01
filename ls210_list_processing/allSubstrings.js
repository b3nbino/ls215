let leadingSubstrings = require("./leadingSubstrings");

function substrings(str) {
  return str
    .split("")
    .map((_, index) => leadingSubstrings(str.slice(index)))
    .flat();
}

// console.log(substrings("abcde"));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

module.exports = substrings;
