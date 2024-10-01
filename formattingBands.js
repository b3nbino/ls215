let bands = [
  { name: "sunset rubdown", country: "UK", active: false },
  { name: "women", country: "Germany", active: false },
  { name: "a silver mt. zion", country: "Spain", active: true },
];

function processBands(data) {
  return data.map((bandInfo) => {
    return {
      name: bandInfo["name"]
        .split(" ")
        .map((word) => {
          word = word.replace(".", "");
          return word[0].toUpperCase() + word.slice(1);
        })
        .join(" "),
      country: "Canada",
      active: bandInfo["active"],
    };
  });
}

console.log(processBands(bands));
console.log(bands);

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]
