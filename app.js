/* Задача вывести в консоль строку "Я люблю JS !" из массива, проходя циклом в обратном порядке, не используя метод reverse. */

const arr = ['!', 'JS', 'люблю', 'Я'];
const arr2 = [];

for (let i = arr.length; i > 0; i--) {
  const lastChild = arr.pop();
  arr2.push(lastChild);
}

console.log(arr2.join(' '));
