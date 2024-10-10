/**
 * Write a function that takes a positive integer, n, as an argument
 * and logs a right triangle whose sides each have n stars. The hypotenuse
 * of the triangle (the diagonal side in the images below) should have one
 * end at the lower-left of the triangle, and the other end at the upper-right.
 *
 * Questions:
 *  - Will the argument always be a positive integer?
 *
 * Data Structures:
 *  Input: Integer
 *  Output: Logged strings
 *  In-between: None
 *
 * Algorithm:
 *  1. Iterate the same amount as the side length
 *     - Log spaces of sideLength - (1 + index) + * repeated (1 + index)
 */

function triangle(sideLength) {
  for (let i = 0; i < sideLength; i++) {
    console.log(`${" ".repeat(sideLength - i)}${"*".repeat(1 + i)}`);
  }
}

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********
