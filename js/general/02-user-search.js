const users = [
  { id: 1, name: 'Alex' },
  { id: 2, name: 'Mary' },
  { id: 3, name: 'Ivan' },
  { id: 4, name: 'Olga' },
  { id: 5, name: 'Dmitri' },
  { id: 6, name: 'Helen' },
  { id: 7, name: 'Sergo' },
  { id: 8, name: 'Anna' },
  { id: 9, name: 'Peter' },
  { id: 10, name: 'Tatiana' },
];

function getUserById(arr, searchId) {
  // option 1:
  // const user = arr.find(u => u.id === searchId);

  // if (user) {
  //   return user;
  // } else {
  //   return `User with ID ${searchId} not found`;
  // }

  // option 2:
  return arr.find(u => u.id === searchId) ?? null;
}

console.log(getUserById(users, 5));
console.log(getUserById(users, 8));
console.log(getUserById(users, 12));
