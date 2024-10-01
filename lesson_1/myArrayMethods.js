//ITERATION
function myForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    //Iterate through array
    func(array[i]); //Apply value to callback
  }
}

let min = Infinity;
let getMin = (value) => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
// console.log(min); // 3

//FILTERING
function myFilter(array, func) {
  let result = []; //Declare and initialize new array

  for (let i = 0; i < array.length; i++) {
    //Iterate through array arg
    if (func(array[i])) {
      //Apply value to callback
      result.push(array[i]); //Add value to new array
    }
  }

  return result; //Return resulting filtered array
}

let isPythagoreanTriple = function (triple) {
  return (
    Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2)
  );
};

// console.log(
//   myFilter(
//     [
//       { a: 3, b: 4, c: 5 },
//       { a: 5, b: 12, c: 13 },
//       { a: 1, b: 2, c: 3 },
//     ],
//     isPythagoreanTriple
//   )
// );

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]

//TRASNSFORMATION
function myMap(array, func) {
  let result = [];

  array.forEach((element) => {
    result.push(func(element));
  });

  return result;
}

let plusOne = (n) => n + 1;
// console.log(myMap([1, 2, 3, 4], plusOne)); // [ 2, 3, 4, 5 ]

//REDUCING
function myReduce(array, func, initial) {
  let val = initial || array[0];

  if (initial) {
    array.forEach((element) => {
      val = func(val, element);
    });
  } else {
    array.slice(1).forEach((element) => {
      val = func(val, element);
    });
  }

  return val;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

// console.log(myReduce([5, 12, 15, 1, 6], smallest)); // 1
// console.log(myReduce([5, 12, 15, 1, 6], sum, 10)); // 49

//INTERGATION
function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i])) {
      return false;
    }
  }
  return true;
}

let isAString = (value) => typeof value === "string";
// console.log(myOwnEvery(["a", "a234", "1abc"], isAString)); // true
