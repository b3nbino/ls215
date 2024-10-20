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

function rotate90(arr) {
  return transpose(arr).map((innerArr) => innerArr.reverse());
}

const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1); // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2); // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3); // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]
