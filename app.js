const audiA3 = 100000;
const bycicle = 10000;
const budget = 10000;

console.log(
  `Я хочу купить ${
    budget >= audiA3 ? 'Audi A3' : budget >= bycicle ? 'bycicle' : 'Foot'
  }`
);
