function binarySearch(arr, searchTerm) {
  let middleIndex = Math.floor(arr.length / 2);
  let finalIndex;

  if (arr[middleIndex] === searchTerm) {
    return middleIndex;
  } else if (arr[middleIndex] > searchTerm) {
    finalIndex = binarySearch(arr.slice(0, middleIndex), searchTerm);

    if (finalIndex === -1) {
      return -1;
    }

    return finalIndex;
  } else if (arr[middleIndex] < searchTerm) {
    finalIndex = binarySearch(arr.slice(middleIndex + 1), searchTerm);

    if (finalIndex === -1) {
      return -1;
    }

    return middleIndex + finalIndex + 1;
  }

  return -1;
}

const yellowPages = [
  "Apple Store",
  "Bags Galore",
  "Bike Store",
  "Donuts R Us",
  "Eat a Lot",
  "Good Food",
  "Pasta Place",
  "Pizzeria",
  "Tiki Lounge",
  "Zooper",
];
console.log(binarySearch(yellowPages, "Pizzeria")); // 7
console.log(binarySearch(yellowPages, "Apple Store")); // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77)); // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89)); // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5)); // 1

console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Peter"
  )
); // -1
console.log(
  binarySearch(
    ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"],
    "Tyler"
  )
); // 6
