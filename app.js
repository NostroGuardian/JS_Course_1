/* 

Есть выгрузка операций пользователя

const operations = [1000, -700, 300, -500, 10000];

а так же начальный баланс в 100$. Необходимо сделать функции расчёта:

    Итогового баланса
    Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
    Расчёта среднего расхода и среднего дохода

*/

const operations = [1000, -700, 300, -500, 10000]; //10100
const startBalance = 100;

function resultBalance(startBalance, operations) {
  let res = 0;
  for (let el of operations) {
    res += el;
  }
  return res + startBalance;
}

function negativeBalance(startBalance, operations) {
  let res = 0 + startBalance;
  const isBalanceOk = true;
  for (el of operations) {
    res += el;
    if (res < 0) {
      isBalanceOk = false;
      break;
    }
  }
  return isBalanceOk;
}

function computeMiddleExpenditure(operations) {
  let res = [];
  for (el of operations) {
    if (el < 0) {
      res.push(el);
    }
  }
  let sum = 0;
  for (el of res) {
    sum += el;
  }
  return sum / res.length;
}

function computeMiddleIncome(operations) {
  let res = [];
  for (el of operations) {
    if (el > 0) {
      res.push(el);
    }
  }
  let sum = 0;
  for (el of res) {
    sum += el;
  }
  return sum / res.length;
}
