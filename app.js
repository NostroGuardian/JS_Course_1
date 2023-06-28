const role1 = 'admin';
const role2 = 'moderator';
const role3 = 'user';

const roles = ['admin', 'moderator', 'user'];

console.log(roles[0]);
console.log(roles.length);
console.log(roles[roles.length - 1]);

console.log(roles.at(-1));

function square(el) {
  return el + el;
}

console.log(square([1, 2, 3]));
