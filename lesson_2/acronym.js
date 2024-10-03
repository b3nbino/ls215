function acronym(string) {
  return string
    .replaceAll("-", " ")
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

console.log(acronym("Portable Network Graphics")); // "PNG"
console.log(acronym("First In, First Out")); // "FIFO"
console.log(acronym("PHP: HyperText Preprocessor")); // "PHP"
console.log(acronym("Complementary metal-oxide semiconductor")); // "CMOS"
console.log(acronym("Hyper-text Markup Language")); // "HTML"
