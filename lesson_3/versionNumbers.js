/**
 * How would you explain to a non-technical person the rules for comparing two version numbers?
 *  - A version number is made up of integers separated by periods. They are read from left to right and can be compared as such.
 *    To compare the numbers simply take each section (integer) one at a time. If we take the left most integer from two version
 *    numbers the one with the larger integer is "greater" for example if we have the version numbers "2.1.3" and "1.11.15" we can
 *    simply take the "2" and the "1" from them (the left most integers) and compare those, in this case "2 > 1" so "2.1.3 > 1.11.15".
 *    If the two integers are the same them we simply move to the next integer (the one after the first period) and compare those.
 *    You can repeat this process until the two integers either are different or one of them ends. If they are the same then they are
 *    equal. If one is longer than the other but all integers before are the same it means that the longer one is greater because the
 *    missing length can be thought of as "0" for example "2.5" and "2.5.0.0" are the same.
 *
 * Algorithm:
 *  1. Return null if any inputs are invalid or missing
 *  2. Split version numbers into array format
 *  3. Iterate through both arrays
 *    a. Compare current value
 *      - If val1 > val2 return 1
 *      - If val1 < val2 return -1
 *      - If val1 = val2 return move to next value until one is greater than the other
 *      - If the end of both arrays is reached without any difference then they are equal
 *      - If the end of either array is reached without any difference then treat the remaining
 *        values as zero, until reaching the end of the other array
 */

function validVersion(version) {
  if (version.length === 0 || !/^(\d+.?)*\d$/.test(version)) {
    return false;
  }
  return true;
}

function compareVersion(versionA, versionB) {
  if (!validVersion(versionA) || !validVersion(versionB)) return null;

  versionA = versionA.split(".").map((str) => Number(str));
  versionB = versionB.split(".").map((str) => Number(str));

  if (versionA.length > versionB.length) {
    while (versionA.length > versionB.length) {
      versionB.push(0);
    }
  } else if (versionA.length < versionB.length) {
    while (versionA.length < versionB.length) {
      versionA.push(0);
    }
  }

  for (let i = 0; i < versionA.length; i++) {
    if (versionA[i] > versionB[i]) {
      return 1;
    } else if (versionA[i] < versionB[i]) {
      return -1;
    }
  }

  return 0;
}

console.log(compareVersion("1", "1")); //0
console.log(compareVersion("1", "2")); //-1
console.log(compareVersion("2", "1")); //1
console.log(compareVersion("1.2", "1.1")); //1
console.log(compareVersion("2.3.4", "2.3.5")); //-1
console.log(compareVersion("1.", ".1")); //null
console.log(compareVersion("1..", "1")); //null
console.log(compareVersion("1", "1.0")); //0
console.log(compareVersion("1.1", "1.0.0")); //1
console.log(compareVersion("1", "1.0.5")); //-1
