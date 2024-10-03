function swapCase(str) {
  return str
    .split("")
    .map((letter) => {
      if (letter === letter.toUpperCase()) {
        return letter.toLowerCase();
      } else {
        return letter.toUpperCase();
      }
    })
    .join("");
}

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"
