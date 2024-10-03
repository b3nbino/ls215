function staggeredCase(str) {
  let caseCounter = 0;
  return str
    .split("")
    .map((letter) => {
      if (!/[a-z]/i.test(letter)) return letter;

      if (caseCounter % 2 === 0) {
        caseCounter += 1;
        return letter.toUpperCase();
      } else {
        caseCounter += 1;
        return letter.toLowerCase();
      }
    })
    .join("");
}

console.log(staggeredCase("I Love Launch School!")); // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_cApS"
console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 444 nUmBeRs"
