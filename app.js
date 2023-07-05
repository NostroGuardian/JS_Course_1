/* Имеется массив изменения цен - prices, где внутри
   1 элемент массива является ценой в момент X,
   2 элемент массива является ценой в момент Y.
   Нужно преобразовать данные в массив, где будут отображены
   только положительные изменения цен: [100, 150] */

const prices = [
  [100, 200],
  [120, 100],
  [200, 350],
];

const positivePrices = prices
  .filter((el, i) => {
    return el[0] < el[1];
  })
  .map((el) => {
    return el[1] - el[0];
  });

console.log(positivePrices);
