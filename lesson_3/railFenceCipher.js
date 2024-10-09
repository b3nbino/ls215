/**
 * Implement encoding and decoding for the rail fence cipher.

  The Rail Fence cipher is a form of transposition cipher that gets its name from the way in which it's encoded.
  It was already used by the ancient Greeks. In the Rail Fence cipher, the message is written downwards on successive "rails" of an imaginary fence,
  then moving up when we get to the bottom (like a zig-zag). Finally the message is then read off in rows.
  For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the cipherer writes out:

    W . . . E . . . C . . . R . . . L . . . T . . . E
    . E . R . D . S . O . E . E . F . E . A . O . C .
    . . A . . . I . . . V . . . D . . . E . . . N . .

  Which reads: WECRLTEERDSOEEFEAOCAIVDEN
  
  Or with two rails it looks like:

    W . A . E . I . C . V . R . D . L . E . T . N . E
    . E . R . D . S . O . E . E . F . E . A . O . C .

  Which reads: WAEICVRDLETNEERDSOEEFEAOC  
  
  Or with four rails it looks like :
    W . . . . . I . . . . . R . . . . . E . . . . . E
    . E . . . D . S . . . E . E . . . E . A . . . C .
    . . A . E . . . C . V . . . D . L . . . T . N . .
    . . . R . . . . . O . . . . . F . . . . . O . . .

  Which reads: WIREEEDSEEEACAECVDLTNROFO
 */

/**
 * ENCODING ALGORITHM:
 *  1. Standardize text. In this case simply making the letters all
 *     uppercase and removing non letters and numbers is what I chose
 *     to do. It's supposed to be a cipher after all.
 *
 *  2. Make a "fence" array that has the specified amount of rails.
 *     - Rails are also arrays, they should have the same length as the message
 *
 *  3. Iterate through the given message, adding the current character to its
 *     spot on the fence.
 *     - As we iterate, the xIndex, or the index of the current character should
 *       always increase.
 *     - The index of the "rail" or the row needs to increase and decrease in a
 *       zig zag pattern. This happens when it reaches either the top or bottom
 *       rail and has placed a letter there.
 *
 *  4. Flatten and join the array to make it into a string, then return that string.
 *
 *
 *  DECODING ALGORITHM:
 *  -Steps one and two are the same as the encoding algorithm.
 *
 *  3. Iterate for the length of the message, adding the current xIndex to the array
 *     - The index of the "rail" or the row needs to increase and decrease in a
 *       zig zag pattern. This happens when it reaches either the top or bottom
 *       rail and has placed a letter there.
 *
 *  4. Flatten the fence array that we just filled, then populate a new array using the
 *     the fence array to tell us what the index of the letter that we want is, in the
 *     encoded message.
 *
 *  5. Join the decoded message to make a string and return it.
 */

function encode(message, railCount) {
  // Standardize text
  message = message.toUpperCase().replace(/[^A-Z0-9]/g, "");

  // If one or less rails return standardized text
  if (railCount <= 1) return message;

  // Create an array with the specified amount of rails
  let rail = new Array(message.length);
  let fence = new Array(railCount).fill(" ").map((_) => rail.slice());

  // Iterate through message moving in a zig zag shape on the fence,
  // adding each letter to the "rail" as we go
  let yIndex = 0;
  let changeInY = 1;
  for (let xIndex = 0; xIndex < message.length; xIndex++) {
    fence[yIndex][xIndex] = message[xIndex];

    yIndex += changeInY;

    // If we have placed an element on the top or bottom rail, make
    // the next element move up or down accordingly
    if (yIndex === railCount - 1 || yIndex === 0) {
      changeInY *= -1;
    }
  }

  // Flatten array and join it to create a string, which is returned
  return fence.flat(Infinity).join("");
}

// Encoding test cases:
console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 4)); // WIREEEDSEEEACAECVDLTNROFO
console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 3)); // WECRLTEERDSOEEFEAOCAIVDEN
console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 2)); // WAEICVRDLETNEERDSOEEFEAOC
console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 1)); // WEAREDISCOVEREDFLEEATONCE
console.log(encode("WE ARE DISCOVERED FLEE AT ONCE", 26)); // WEAREDISCOVEREDFLEEATONCE

function decode(message, railCount) {
  // If only one rail return standard text
  if (railCount === 1 || railCount === 26) return message;

  // Create an array with the specified amount of rails
  let rail = new Array(message.length);
  let fence = new Array(railCount).fill(" ").map((_) => rail.slice());

  // Iterate through message moving in a zig zag shape on the fence,
  // placing the current xIndex AKA the letter's index in the array
  let yIndex = 0;
  let changeInY = 1;
  for (let xIndex = 0; xIndex < message.length; xIndex++) {
    fence[yIndex][xIndex] = xIndex;

    yIndex += changeInY;

    //Changes whether we're moving up or down the rails
    if (yIndex === railCount - 1 || yIndex === 0) {
      changeInY *= -1;
    }
  }

  // Flatten array to get the indicies of each letter
  let letterIndicies = fence.flat(Infinity);

  // Create an array to fill with the the properly ordered letters
  let decodedMessageArr = Array(message.length);

  // Iterate through the letter indicies and place those letters in their place in the new array
  letterIndicies.forEach((_, index, thisArr) =>
    decodedMessageArr.push(message[thisArr.indexOf(index)])
  );

  // Return decoded message as a string
  return decodedMessageArr.join("");
}

// Decoding test cases:
console.log(decode("WECRLTEERDSOEEFEAOCAIVDEN", 3)); //WEAREDISCOVEREDFLEEATONCE for all
console.log(decode("WAEICVRDLETNEERDSOEEFEAOC", 2));
console.log(decode("WEAREDISCOVEREDFLEEATONCE", 1));
console.log(decode("WIREEEDSEEEACAECVDLTNROFO", 4));
console.log(decode("WEAREDISCOVEREDFLEEATONCE", 26));
