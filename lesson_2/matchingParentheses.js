function isBalanced(str) {
  let balance = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      balance += 1;
    } else if (str[i] === ")") {
      balance -= 1;
    }

    if (balance === -1) {
      return false;
    }
  }

  return balance === 0;
}

console.log(isBalanced("What (is) this?")); // true
console.log(isBalanced("What is) this?")); // false
console.log(isBalanced("What (is this?")); // false
console.log(isBalanced("((What) (is this))?")); // true
console.log(isBalanced("((What)) (is this))?")); // false
console.log(isBalanced("Hey!")); // true
console.log(isBalanced(")Hey!(")); // false
console.log(isBalanced("What ((is))) up(")); // false
