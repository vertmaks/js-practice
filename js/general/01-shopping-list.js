const shoppingList = [
  { name: 'Bread', quantity: 2, price: 1.5 },
  { name: 'Milk', quantity: 1, price: 1.2 },
];

function sum(arr) {
  // option 1:
  // let totalPrice = 0;
  // arr.map(obj => obj.quantity * obj.price).map(value => (totalPrice += value));

  // option 2:
  // let totalPrice = arr
  //   .map(obj => obj.quantity * obj.price)
  //   .reduce((acc, value) => acc + value, 0);

  // option 3
  return arr.reduce((acc, i) => acc + i.quantity * i.price, 0);
}

console.log('Total price:', sum(shoppingList));
