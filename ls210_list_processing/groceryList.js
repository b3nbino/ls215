function buyFruit(groceryList) {
  return groceryList
    .map((itemAndQuantity) => {
      let items = [];
      for (let i = 0; i < itemAndQuantity[1]; i++) {
        items.push(itemAndQuantity[0]);
      }
      return items;
    })
    .flat();
}

console.log(
  buyFruit([
    ["apple", 3],
    ["orange", 1],
    ["banana", 2],
  ])
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
