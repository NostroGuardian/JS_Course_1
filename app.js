/*
Пользователь:

    Возраст
    Наличие работы
    Деньги

Нужно проверить может ли он купить новый MacBook за 2000? Он может брать не только свои деньги, но и взять кредит. Ему дадут 500, только если ему больше 24-х лет и он имеет работу, 100 если ему просто больше 24-х лет и 0 в ином случае. Напишите функцию, которая принимает данные пользователя и товара и возвращает true или false.
*/

function creditLimit(age, work) {
  if (age > 24 && work === 'Yes') {
    return 500;
  } else if (age > 24 && work === 'No') {
    return 100;
  } else {
    return Number(0);
  }
}

function canBuyMacBook(age, work, money) {
  const creditAdd = creditLimit(age, work);
  const userMoney = money + creditAdd;
  return userMoney >= 2000 ? true : false;
}

console.log(canBuyMacBook(24, 'No', 2000));
