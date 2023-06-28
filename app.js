const users = ['Anya', 'Vika', 'Katya'];
console.log(users);

users[2] = 'Kris';
console.log(users);

const arrLenght = users.push('Ivan');
console.log(users, arrLenght);

users.unshift('Liza');
console.log(users);

const el = users.pop();
console.log(users);
console.log(el);

const el2 = users.shift();
console.log(users);
console.log(el2);
