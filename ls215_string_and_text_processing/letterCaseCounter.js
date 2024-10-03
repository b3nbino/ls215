function letterCaseCount(str) {
  let lower = str.match(/[a-z]/g);
  let upper = str.match(/[A-Z]/g);
  let neith = str.match(/[^A-Za-z]/g);

  return {
    lowercase: lower ? lower.length : 0,
    uppercase: upper ? upper.length : 0,
    neither: neith ? neith.length : 0,
  };
}

console.log(letterCaseCount("abCdef 123")); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount("AbCd +Ef")); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount("123")); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount("")); // { lowercase: 0, uppercase: 0, neither: 0 }
