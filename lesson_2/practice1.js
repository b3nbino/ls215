// let firstName = "Benjamin";
// let lastName = "Stevens";
// let fullName = firstName + " " + lastName;

// console.log(fullName);
// console.log(firstName.concat(lastName));
// console.log(fullName.split(" "));

// let language = "JavaScript";
// let idx = language.indexOf("S");
// console.log(idx);

// let charCode = language.charCodeAt(idx);
// console.log(charCode);
// console.log(String.fromCharCode(charCode));
// console.log(language.lastIndexOf("a"));

// let a = "a";
// let b = "b";
// console.log(a > b);

// b = "B";
// console.log(a > b);

// console.log(language.slice(1, 4));
// console.log(language.slice(2, 4));
// console.log(language.substring(1, 4));
// console.log(language.substring(2, 4));
// console.log(language.slice(1, -1));
// console.log(language.slice(2, -1));
// console.log(language.substring(1, -1));
// console.log(language.substring(2, -1));

// let fact1 = "JavaScript is fun";
// let fact2 = "Kids like it too";
// let compoundSentence = fact1 + " and " + fact2.toLowerCase();
// console.log(compoundSentence);
// console.log(fact1[0]);
// console.log(fact2[0]);

// let pi = 22 / 7;
// pi = pi.toString();
// console.log(pi.lastIndexOf("14"));

// let boxNumber = (356).toString();
// console.log(boxNumber);

// boxNumber = parseInt(boxNumber);
// console.log(typeof boxNumber);
// boxNumber = String(boxNumber);
// console.log(typeof boxNumber);

let rlsync = require("readline-sync");

let name = rlsync.question("What is your name?");

if (name.includes("!")) {
  console.log(`HELLO ${name}, WHY ARE WE YELLING?!`);
} else {
  console.log(`Hello, ${name}`);
}
