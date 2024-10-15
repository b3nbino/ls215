/**
 * Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is
 * supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid
 * (i.e., when n is 7)
 *
 * Problem:
 * - Create a star, logged to the console
 * - N is the height and width of the star
 *
 * Data Structures:
 *  Input: integer
 *  Output: Strings logged to the console
 *  In-between: strings, None
 *
 * Algorithm:
 *  1. Iterate n times
 *     - Each of the top and bottom section's lines have three stars
 *     - Middle line has n stars
 */

function star(dimensions) {
  let spacesBeforeStars = 0;
  let spacesBetweenStars = (dimensions - 3) / 2;
  for (let i = 0; i < dimensions; i++) {
    if (i < Math.floor(dimensions / 2)) {
      console.log(
        " ".repeat(spacesBeforeStars) +
          "*" +
          " ".repeat(spacesBetweenStars) +
          "*" +
          " ".repeat(spacesBetweenStars) +
          "*"
      );
      spacesBetweenStars -= 1;
      spacesBeforeStars += 1;
    } else if (i === Math.floor(dimensions / 2)) {
      console.log("*".repeat(dimensions));
    } else if (i > Math.floor(dimensions / 2)) {
      spacesBetweenStars += 1;
      spacesBeforeStars -= 1;
      console.log(
        " ".repeat(spacesBeforeStars) +
          "*" +
          " ".repeat(spacesBetweenStars) +
          "*" +
          " ".repeat(spacesBetweenStars) +
          "*"
      );
    }
  }
}

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

star(11);
star(13);
