/**
 * Write a function that rotates the last n digits of a number. For the rotation,
 * rotate by one digit to the left, moving the first digit to the end.
 *
 * Questions:
 *  - Will the input always be two integers?
 *  - Will there always be two inputs?
 *  - What should happen if the amount of digits exceeds the length of the number?
 *
 * Algorithm:
 *  1. Convert number to array
 *  2. Return array until last digits + rotated digits, joined and Numberized
 */

function rotateRightmostDigits(num, digits) {
  let numArr = String(num).split("");
  return Number(
    numArr
      .slice(0, -digits)
      .concat(rotateArray(numArr.slice(-digits)))
      .join("")
  );
}

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).concat(arr[0]);
}

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917
