/**
 * 'Bubble Sort' is one of the simplest sorting algorithms available. Although it is not an efficient algorithm,
 * it is an excellent exercise for student developers. In this exercise, you will write a function that sorts an
 * array using the bubble sort algorithm.
 *
 * A bubble sort works by making multiple passes (iterations) through an array. On each pass, the two values of
 * each pair of consecutive elements are compared. If the first value is greater than the second, the two
 * elements are swapped. This process is repeated until a complete pass is made without performing any swaps — at
 * which point the array is completely sorted.
 *
 * Data Structures:
 *  Input: array
 *  Output: undefined
 *  In-between: array
 *
 * Algorithm:
 *  1. Iterate until no swaps occur
 *     - Compare two values
 *       - If val1 < val2, continue
 *       - If val1 > val2, swap values
 *  2. Return
 */

function bubbleSort(arr) {
  let swapped = false;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        let tempVal = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tempVal;
      }
    }
  } while (swapped);

  return;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1); // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2); // [1, 2, 4, 6, 7]

const array3 = ["Sue", "Pete", "Alice", "Tyler", "Rachel", "Kim", "Bonnie"];
bubbleSort(array3);
console.log(array3); // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]
