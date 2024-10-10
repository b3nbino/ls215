/**
 * Modify the wordSizes function from the previous exercise
 * to exclude non-letters when determining word size. For
 * instance, the word size of "it's" is 3, not 4.
 */

function wordSizes(str) {
  str = str.replace(/[^a-z ]/gi, "");
  let counts = {};
  if (str.length === 0) return counts;

  str.split(" ").forEach((word) => {
    if (counts[word.length]) {
      counts[word.length] += 1;
    } else if (word.length > 0) {
      counts[word.length] = 1;
    }
  });

  return counts;
}

console.log(wordSizes("Four score and seven.")); // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes("Hey diddle diddle, the cat and the fiddle!")); // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?")); // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes("")); // {}
