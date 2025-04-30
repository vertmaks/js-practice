const userArr = [
  { name: 'Anna', age: 25 },
  { name: 'Michael', age: 16 },
  { name: 'Sarah', age: 18 },
  { name: 'David', age: 22 },
  { name: 'Emily', age: 14 },
  { name: 'John', age: 27 },
  { name: 'Sophia', age: 20 },
  { name: 'Daniel', age: 15 },
  { name: 'Olivia', age: 28 },
  { name: 'James', age: 16 },
];

function getAdultUsers(arr) {
  return arr.filter(user => user.age >= 18);
}

console.log(getAdultUsers(userArr));
