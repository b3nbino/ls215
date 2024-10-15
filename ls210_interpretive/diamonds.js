/**
 * Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer supplied
 * as an argument to the function. You may assume that the argument will always be an odd integer.
 *
 * Problem:
 * - Create and log a diamond per the examples
 * - Function argument will always be an odd integer
 * - The and height of the diamond should be nxn where n is the argument
 *
 * Data Structures:
 *  Input: Integer
 *  Output: Logged strings
 *  In-between: None
 *
 * Algorithm:
 *  1. Guard clause for 1
 *  2. Iterate n times
 *     - Log stars that increase and then decrease in amount
 *     - Increase and decrease in stars should be in 2s
 *     - Stars should be preceeded by spaces to form a diamond
 *     - Spaces should decrease then increase, by 1s
 */

function diamond(diamondSize) {
  if (diamondSize === 1) {
    console.log("*");
    return;
  }

  let starCount = 1;
  let spaceCount = Math.floor(diamondSize / 2);
  for (let i = 1; i <= diamondSize; i++) {
    console.log(" ".repeat(spaceCount) + "*".repeat(starCount));

    if (i < Math.ceil(diamondSize / 2)) {
      starCount += 2;
      spaceCount -= 1;
    } else {
      starCount -= 2;
      spaceCount += 1;
    }
  }
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *
