function staggeredCase(str) {
  return str
    .split("")
    .map((letter, index) =>
      index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("");
}

console.log(staggeredCase("I Love Launch School!")); // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase("ALL_CAPS")); // "AlL_CaPs"
console.log(staggeredCase("ignore 77 the 4444 numbers")); // "IgNoRe 77 ThE 4444 nUmBeRs"
