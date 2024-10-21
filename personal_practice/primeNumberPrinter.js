/**
 * Write a function, primeNumberPrinter, that prints all prime numbers present as
 * substrings in a given string.
 *
 * Problem:
 *  - Input is a string
 *  - Output is all prime numbers present in a string logged and returned as an array
 *  - If there are no prime numbers in the string, output should be an empty array
 *  - Symbols may be present in the string
 *  - Side-by-side integers should be counted as one number "as113hr" --> "113"
 *  - The output should be ordered by appearance in the string
 *  - The string will not contain negative numbers
 *
 * Questions:
 *  - Will the input always be a string?
 *  - Will there always be one argument?
 *  - Will the string always have numbers present? prime numbers?
 *  - Will there ever be special characters in the string?
 *  - Should numbers next to each-other always be counted as one number? "ab79o" --> [79], should they be counter separately as well? "ab79o" --> [7, 9, 79]
 *  - Should the output be logged to the console? individually? as an array?
 *  - Should an empty array be returned if there are no prime numbers?
 *  - What order should the numbers be in when output?
 *  - Can the string contain negative numbers?
 *
 * Algorithm:
 *  1. Guard clause for empty string or non-string
 *  2. Extract numbers from the string
 *  3. Filter out all non-prime numbers
 *  4. Log and return the array
 */

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function primeNumberPrinter(str) {
  if (typeof str !== "string" || str.length === 0) {
    console.log([]);
    return [];
  }

  let nums = str.match(/\d+/g) || [];
  nums = nums.map((num) => Number(num)).filter((num) => isPrime(num));

  console.log(nums);
  return nums;
}

console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
console.log(primeNumberPrinter("hjs79aksdj2ji13k11")); // [79, 2, 13, 11]
console.log(primeNumberPrinter("vhj*17jg=19m")); // [17, 19]
console.log(primeNumberPrinter("vhj:83jg$59m")); // [83, 59]
console.log(primeNumberPrinter("4gh9k0lm")); // []
console.log(primeNumberPrinter("oisdufo*(kas?asd")); // []
console.log(primeNumberPrinter("")); // []
console.log(primeNumberPrinter(9)); // []
console.log(primeNumberPrinter([])); // []
console.log(primeNumberPrinter({ a: 12, b: "fed" })); // []
