/**
 * Take the number 735291 and rotate it by one digit to the left, getting 352917.
 * Next, keep the first digit fixed in place and rotate the remaining digits to get
 * 329175. Keep the first two digits fixed in place and rotate again to get 321759.
 * Keep the first three digits fixed in place and rotate again to get 321597.
 * Finally, keep the first four digits fixed in place and rotate the final two
 * digits to get 321579. The resulting number is called the maximum rotation of the
 * original number.
 *
 * Write a function that takes an integer as an argument and returns the maximum
 * rotation of that integer. You can (and probably should) use the rotateRightmostDigits
 * function from the previous exercise.
 *
 * Algorithm:
 * 1. Iterate until only two digits need to be rotated
 *    - Rotate all digits then all -1 then all -2...
 * 3. Return max rotated number
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

function maxRotation(num) {
  for (let i = String(num).length; i >= 2; i--) {
    num = rotateRightmostDigits(num, i);
  }

  return Number(num);
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
