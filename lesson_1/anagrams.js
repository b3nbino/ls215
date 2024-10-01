function anagram(word, list) {
  return list.filter((currWord) => areAnagrams(word, currWord));
}

function areAnagrams(word1, word2) {
  let word1Array = word1.split("").sort();
  let word2Array = word2.split("").sort();

  if (word1Array.length === word2Array.length) {
    for (let i = 0; i < word1Array.length; i++) {
      if (word1Array[i] !== word2Array[i]) {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

console.log(anagram("listen", ["enlists", "google", "inlets", "banana"])); // [ "inlets" ]
console.log(anagram("listen", ["enlist", "google", "inlets", "banana"])); // [ "enlist", "inlets" ]
