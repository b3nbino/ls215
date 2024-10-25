/*
Problem:
 - Input is a string of letters
 - Output is a an array of the input string with varying capitalization
   - Each letter in the input string should be capitalized at only point in the array
 - The output array should have as many strings as there are letters in the input string
 - If there is a space the space should not be counted
 
Algorithm:
 1. Make an array with as many of the input string as there are characters in the string
 2. Map the array to have intended capitalization
    - Letter to be capitalized correspond to the index in the array
 3. Remove spaces from array
 3. Return array
*/

function wave(str) {
  let waveArr = new Array(str.length)
    .fill(str)
    .map(
      (curr, index) =>
        curr.slice(0, index) + curr[index].toUpperCase() + curr.slice(index + 1)
    );

  let spaceIndexArr = str.match(/ /g) || [];

  for (let i = 0; i < spaceIndexArr.length; i++) {
    spaceIndexArr[i] = str.indexOf(" ", spaceIndexArr[i - 1] + 1);
  }
  spaceIndexArr.forEach((spaceIndex, currIndex) =>
    waveArr.splice(spaceIndex - currIndex, 1)
  );

  return waveArr;
}

console.log(
  wave(" u xqyttevz uya rjgdbbuos t gmbuppkfpn egjvu jc femimgohbzenmznjbzg")
);
