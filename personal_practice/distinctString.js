/**
 * A distinct string is a string that is present only once in an array.
 *
 * Given an array of strings, arr, and an integer, k, return the kth distinct
 * string present in arr.
 * If there are fewer than k distinct strings, return an empty string "".
 *
 * Note that the result string is the one encountered earliest in the array.
 *
 * Problem:
 *  - A distinct string is a string that is present only once in an array.
 *  - Input is an array of strings and an integer "k"
 *  - Output is the kth distinct string in the array
 *  - If there are fewer than k ditinct strings return an empty string ""
 *  - kth being the earliest or from left to right as Input
 *
 * Questions:
 *  - Will the input always be an array?
 *    - Will it always have only strings?
 *    - What should we do if we get a non-array or non-strings?
 *  - Will the array ever be empty? sparse?
 *  - Are distinct strings case sensitive? does ["a", "A"] contain two distinct strings?
 *  - Can the strings have symbols or numbers in them?
 *  - Will any of the strings ever be empty?
 *  - Will the second argument always be an integer? Always greater than zero?
 *  - Will there always be two arguments?
 *
 * Data Structures:
 *  Input: array and an integer
 *  Output: string
 *  In-between: array
 *
 * Algorithm:
 *  1. Create a counter to tell how many unique strings we have found
 *  2. Iterate through array until kth distinct string is found or last element
 *     - If current elements first and last index are equal
 *       - Increase counter by 1
 *       - If counter is equal to k
 *         - Return current element
 * 3. If kth unique element is not found, return ""
 *
 * Alternative Algorithm:
 * 1. Filter array
 * 2. If filtered array length is <= k
 *    - return k - 1 element in array
 *    Else return ""
 */

function distinctString(strArr, kCount) {
  let filteredArr = strArr.filter(
    (currStr, _, thisArr) =>
      thisArr.indexOf(currStr) === thisArr.lastIndexOf(currStr)
  );

  if (filteredArr.length >= kCount) {
    return filteredArr[kCount - 1];
  }

  return "";
}

console.log(distinctString(["d", "b", "c", "b", "c", "a"], 1)); // "d"
console.log(distinctString(["d", "b", "c", "b", "c", "a"], 2)); // "a"
console.log(distinctString(["f"], 1)); // "f"
console.log(distinctString(["d", "d"], 1)); // ""
console.log(distinctString(["d", "b", "c", "b", "c", "a"], 5)); // ""
