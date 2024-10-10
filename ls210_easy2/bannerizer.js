/**
 * Write a function that will take a short line of text, and write it to the console log within a box.
 *
 * Questions:
 *  - Will the input always be a string?
 *  - Will there ever be multiple lines of text?
 *
 * Data Structures:
 *  Input: String
 *  Output Logged strings
 *
 * Algorithm:
 *  1. Create banner top and bottom based on string length
 *     - +(-).repeat(string.length + 2)+
 *     - |( ).repeat(string.length + 2)|
 *  2. Create part of banner with string on it
 *  3. Combine strings and log
 *
 */

function logInBox(str) {
  let topAndBottom = `+${"-".repeat(str.length + 2)}+`;
  let bumper = `|${" ".repeat(str.length + 2)}|`;
  let middle = `| ${str} |`;

  console.log(topAndBottom);
  console.log(bumper);
  console.log(middle);
  console.log(bumper);
  console.log(topAndBottom);
}

function logInBoxMax(str, maxStrLength) {
  maxStrLength = maxStrLength || str.length;
  let topAndBottom = `+${
    str.length > maxStrLength
      ? "-".repeat(maxStrLength + 2)
      : "-".repeat(str.length + 2)
  }+`;
  let bumper = `|${
    str.length > maxStrLength
      ? " ".repeat(maxStrLength + 2)
      : " ".repeat(str.length + 2)
  }|`;
  let middle = `| ${
    str.length > maxStrLength ? str.substring(0, maxStrLength - 3) + "..." : str
  } |`;

  console.log(topAndBottom);
  console.log(bumper);
  console.log(middle);
  console.log(bumper);
  console.log(topAndBottom);
}

logInBox("To boldly go where no one has gone before.");

/**
 * +--------------------------------------------+
 * |                                            |
 * | To boldly go where no one has gone before. |
 * |                                            |
 * +--------------------------------------------+
 */

logInBox("");
// +--+
// |  |
// |  |
// |  |
// +--+

logInBoxMax("To boldly go where no one has gone before.", 15);

/**
 * +--------------------------------------------+
 * |                                            |
 * | To boldly go where no one has gone before. |
 * |                                            |
 * +--------------------------------------------+
 */

logInBoxMax("", 5);
// +--+
// |  |
// |  |
// |  |
// +--+
