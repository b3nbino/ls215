/**
 * A 3x3 matrix can be represented by an array of arrays: an outer array containing three subarrays that each
 * contain three elements. For example, the 3x3 matrix shown below:
 *
 * 1  5  8
 * 4  7  2
 * 3  9  6
 *
 * is represented by the following array of arrays:
 *
 * const matrix = [
 *   [1, 5, 8],
 *   [4, 7, 2],
 *   [3, 9, 6],
 * ];
 *
 * The transpose of a 3x3 matrix is the matrix that results from exchanging the rows and columns of the original
 * matrix. For example, the transposition of the matrix shown above is:
 *
 * 1  4  3
 * 5  7  9
 * 8  2  6
 *
 * Write a function that takes an array of arrays that represents a 3x3 matrix and returns the transpose of the
 * matrix. You should implement the function on your own, without using any external libraries.
 *
 * Take care not to modify the original matrix — your function must produce a new matrix and leave the input
 * matrix array unchanged.
 *
 * NOTE - ALSO WORKS FOR MxN size matrix
 */

function transpose(arr) {
  let outerArr = Array();
  for (let i = 0; i < arr[0].length; i++) {
    outerArr.push(new Array());
  }

  for (let xIndex = 0; xIndex < arr[0].length; xIndex++) {
    for (let yIndex = 0; yIndex < arr.length; yIndex++) {
      outerArr[xIndex].push(arr[yIndex][xIndex]);
    }
  }

  return outerArr;
}

console.log(
  transpose([
    [1, 5, 8],
    [4, 7, 2],
    [3, 9, 6],
  ])
);

//1  4  3
//5  7  9
//8  2  6

console.log(
  transpose([
    [5, 6, 7, 1],
    [3, 4, 0, 2],
    [3, 6, 7, 1],
  ])
);

//5 6 7 1       5 3 3 2
//3 4 0 2  -->  6 4 6 8
//3 6 7 1       7 0 7 4
//2 8 4 3       1 2 1 3
