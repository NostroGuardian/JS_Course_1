const balance = 900;
const bonusBalance = 100;
const isBanned = false;
const isExist = false;
const isSelling = true;

const canBuy =
  (balance > 1000 || bonusBalance >= 100) && !isBanned && isSelling && !isExist;

console.log(`Могу купить игру: ${canBuy ? 'Yes' : 'No'}`);
