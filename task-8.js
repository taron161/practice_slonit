function getSumOfPurchasesOfBuyers(buyers) {
  let sum = 0;
  buyers.forEach(buyer => {
    sum += buyer;
  });
  return sum;
}

let buyers = [10000, 20000, 30000];
console.log(getSumOfPurchasesOfBuyers(buyers));