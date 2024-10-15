/**
 * The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution. It uses a series of Caesar
 * Ciphers based on the letters of a keyword. Each letter of the keyword is treated as a shift value. For
 * instance, the letter 'B' corresponds to a shift value of 1, and the letter 'd' corresponds to a shift value
 * of 3. In other words, the shift value used for a letter is equal to its index value in the alphabet. This
 * means that the letters 'a'-'z' are equivalent to the numbers 0-25. The uppercase letters 'A'-'Z' are also
 * equivalent to 0-25.
 *
 * Applying the Vigenere Cipher is done sequentially for each character by applying the current shift value to
 * a Caesar Cipher for that particular character. To make this more concrete, let's look at the following example:
 *
 * plaintext: Pineapples don't go on pizzas!
 * keyword: meat
 *
 * Applying the Vigenere Cipher for each alphabetic character:
 * plaintext : Pine appl esdo ntgo onpi zzas
 * shift     : meat meat meat meat meat meat
 * ciphertext: Bmnx mtpe qwdh zxgh arpb ldal
 *
 * result: Bmnxmtpeqw dhz'x gh ar pbldal!
 *
 * Notice that in the example, the key isn't moved forward if the character isn't in the alphabet. Like the Caesar
 * Cipher, the Vigenere Cipher only encrypts alphabetic characters.
 *
 * Write a function that implements the Vigenere Cipher. The case of the keyword doesn't matter—in other words, the
 * resulting encryption won't change depending on the case of the keyword's letters (e.g., 'MEat' === 'mEaT').
 *
 * Problem:
 *  - The vigenere cipher is a series of ceasar ciphers where the shift value for each character is dependent on
 *    a keyword
 *  - The keyword can be any word
 *  - Each letter in the key corresponds to a zero-index based alphabet (a ->, 0 b -> 1, ..., z -> 25)
 *  - Once the end of the keyword has been reached wrap around and start at the first letter again
 *  - Letter cases and non-letters remain the same
 *  - The keyword is not applied to non-letters
 *
 * Data Structures:
 *  Input: two strings
 *  Output: string
 *  In-between: Arrays, functions
 *
 * Algorithm:
 *  0. Create a lowercase shiftkey >= the length of the message
 *  1. Split message into an array of characters
 *     - If current char is non-letter, return char
 *     - Else return letter passed into ceasar cipher with a shift value based on the shift key
 *       - To find shift key have an outside index that increases by 1 after each letter
 *       - Find the character in the shiftkey at the current index, then find the index of that character in the alphabet array
 * 2. Return joined array as string
 */

function vigenereEncrypt(message, shiftKey) {
  shiftKey = shiftKey.toLowerCase();
  while (shiftKey.length < message.length) {
    shiftKey += shiftKey;
  }

  let shiftKeyIndex = 0;
  return message
    .split("")
    .map((char) => {
      if (/[^a-z]/gi.test(char)) {
        return char;
      } else {
        let currentShift = alphabet.indexOf(shiftKey[shiftKeyIndex]);
        shiftKeyIndex++;
        return caesarEncrypt(char, currentShift);
      }
    })
    .join("");
}

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

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", "meat")); //Bmnxmtpeqw dhz'x gh ar pbldal!
console.log(vigenereEncrypt("abcdefghijklmnopqrstuvwxyz", "b"));
console.log(vigenereEncrypt("ABCDEFGHIJKLMNOPQRSTUVWXYZ", "z"));
