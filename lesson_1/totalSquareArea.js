function totalArea(array) {
  return array.reduce((acc, curr) => acc + curr[0] * curr[1], 0);
}

let rectangles1 = [
  [3, 4],
  [6, 6],
  [1, 8],
  [9, 9],
  [2, 2],
];

console.log(totalArea(rectangles1)); // 141

function totalSquareArea(array) {
  array = array.filter((rect) => rect[0] === rect[1]);
  return totalArea(array);
}

let rectangles2 = [
  [3, 4],
  [6, 6],
  [1, 8],
  [9, 9],
  [2, 2],
];

console.log(totalSquareArea(rectangles2)); // 121
