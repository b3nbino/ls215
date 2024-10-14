/**
 * Write a function that takes a floating point number representing
 * an angle between 0 and 360 degrees and returns a string representing
 * that angle in degrees, minutes, and seconds. You should use a degree
 * symbol (°) to represent degrees, a single quote (') to represent
 * minutes, and a double quote (") to represent seconds. There are 60
 * minutes in a degree, and 60 seconds in a minute.
 */

function dms(fullDegree) {
  if (Number.isInteger(fullDegree)) {
    return `${fullDegree}\u00B000'00\"`;
  }

  let degrees = parseInt(fullDegree);
  let fullMinutes = ((fullDegree - degrees) * 60).toFixed(2);
  let minutes = parseInt(fullMinutes);
  let seconds = parseInt((fullMinutes - minutes) * 60);

  console.log(`${degrees}\u00B0${minutes}'${seconds}\"`);
  return `${degrees}\u00B0${minutes}'${seconds}\"`;
}

// All test cases should return true
console.log(dms(30) === "30°00'00\"");
console.log(dms(76.73) === "76°43'48\"");
console.log(dms(254.6) === "254°35'59\"");
console.log(dms(93.034773) === "93°02'05\"");
console.log(dms(0) === "0°00'00\"");
console.log(dms(360) === "360°00'00\"" || dms(360) === "0°00'00\"");
