/**
 * A collection of spelling blocks has two letters per block, as shown in this list:
 *
 * B:O   X:K   D:Q   C:P   N:A
 * G:T   R:E   F:S   J:W   H:U
 * V:I   L:Y   Z:M
 *
 * ABCDEFGHIJKLM
 * NOPQRSTUVWXYZ
 *
 * This limits the words you can spell with the blocks to only those words that do not use both letters from any
 * given block. You can also only use each block once.
 *
 * Write a function that takes a word string as an argument and returns true if the word can be spelled using the
 * set of blocks, false otherwise. You can consider the letters to be case-insensitive when you apply the rules.
 *
 * Problem:
 *  - We are given a set of spelling blocks
 *    - Each block has a letter from the first half of the alphabet and one from the last half
 *  - Each block can only be used once
 *  - If a letter on a block has been used then its companion can no longer be used
 *  - Return whether the string can be spelled using the letter blocks
 *
 * Questions:
 *  - Can the input ever be a non-string?
 *  - Can the string have a length of zero?
 *  - Can the string have non-letters?
 *
 * Data Structures:
 *  Input: string of letters
 *  Output: boolean
 *  In-between: Arrays and object
 *
 * Algorithm:
 *  1. Iterate thorugh the string
 *     - If letter block has been used before
 *       - Return false
 *     - Else
 *       Check off letter block as been used
 *  2. Return true
 */

let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function isBlockWord(word) {
  let letterUsed = {
    a: false,
    b: false,
    c: false,
    d: false,
    e: false,
    f: false,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: false,
    t: false,
    u: false,
    v: false,
    w: false,
    x: false,
    y: false,
    z: false,
  };
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    currLetter = word[i];
    if (letterUsed[currLetter]) {
      return false;
    } else {
      letterUsed[currLetter] = true;
      if (letters.indexOf(currLetter) < 13) {
        letterUsed[letters[letters.indexOf(currLetter) + 13]] = true;
      } else {
        letterUsed[letters[letters.indexOf(currLetter) - 13]] = true;
      }
    }
  }

  return true;
}

console.log(isBlockWord("BATCH")); // true
console.log(isBlockWord("BUTCH")); // false
console.log(isBlockWord("jest")); // true
