function multiplyAllPairs(arr1, arr2) {
  let result = [];
  arr1.forEach((element) => {
    for (let i = 0; i < arr2.length; i++) {
      result.push(element * arr2[i]);
    }
  });

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
