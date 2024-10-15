/**
 * Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest
 * ways to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in
 * which each letter in a plaintext is substituted by the letter located a given number of positions away in
 * the alphabet. For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with
 * the letter 'D'. This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext)
 * can be decoded using this key value.
 *
 * The Caesar Cipher only encrypts letters (including both lower and upper case). Any other character is left
 * as is. The substituted letters are in the same letter case as the original letter. If the key value for
 * shifting exceeds the length of the alphabet, it wraps around from the beginning.
 *
 * Problem:
 *  - Ceaser cipher is where we shift letters by a given amount (shift 3 "ayC" -> "dbF")
 *  - Non-letters are left as is
 *  - Letters should keep the same case
 *  - If letter shift exeeds alphabet, it wraps around
 *
 * Questions:
 *  - Will the input always be a string?
 *  - Will the shift value always be a positive integer?
 *
 * Data Structures:
 *  Input: string and integer
 *  Output: string
 *  In-between: Arrays
 *
 * Algorithm:
 * 1. Split string then map each character to it corresponding value
 *    - If character is a letter
 *      - find index of new letter by adding shift value to index of character, then subtracting 26 until < 26
 *      - Return char with newly found index
 *    - Else
 *      - Return current character
 * 2. Join array into new string
 */

const alphabet = [
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

function caesarEncrypt(message, shiftValue) {
  return message
    .split("")
    .map((char) => {
      if (/[^a-z]/gi.test(char)) {
        return char;
      } else if (/[A-Z]/g.test(char)) {
        let index = alphabet.indexOf(char.toLowerCase()) + shiftValue;

        while (index >= 26) {
          index -= 26;
        }

        return alphabet[index].toUpperCase();
      } else {
        let index = alphabet.indexOf(char) + shiftValue;

        while (index >= 26) {
          index -= 26;
        }

        return alphabet[index];
      }
    })
    .join("");
}

// simple shift
console.log(caesarEncrypt("A", 0)); // "A"
console.log(caesarEncrypt("A", 3)); // "D"

// wrap around
console.log(caesarEncrypt("y", 5)); // "d"
console.log(caesarEncrypt("a", 47)); // "v"

// all letters
console.log(caesarEncrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt("The quick brown fox jumps over the lazy dog!", 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(
  caesarEncrypt(
    "There are, as you can see, many punctuations. Right?; Wrong?",
    2
  )
);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"
