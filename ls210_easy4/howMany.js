/**
 * Write a function that counts the number of occurrences of each
 * element in a given array. Once counted, log each element alongside
 * the number of occurrences.
 */

function countOccurrences(arr) {
  let count = {};
  arr.forEach((element) => {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  });

  Object.keys(count).forEach((key) => console.log(`${key} => ${count[key]}`));
}

const vehicles = [
  "car",
  "car",
  "truck",
  "car",
  "SUV",
  "truck",
  "motorcycle",
  "suv",
  "motorcycle",
  "car",
  "truck",
];

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1
