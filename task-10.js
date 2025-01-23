const util = {
  // Часть 1
  getSumNumbersInObject(obj) {
    let sum = 0;
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        sum += obj[key];
      }
    };

    return sum;
  },
  // Часть 2 (со звездочкой)
  getSortedArrayByNumbers(obj) {
    let numbers = [];
    let keys = [];
    let sortedArray = [];
    for (let key in obj) {
      if (typeof obj[key] === 'number') {
        numbers.push(obj[key]);
        keys.push(key);
      }
    };

    numbers.sort((a, b) => b - a);
    numbers.forEach((number) => {
      keys.forEach((key) => {
        if (obj[key] === number) {
          sortedArray.push(key);
        }
      });
    });
    return sortedArray;
  }
};



const user = {
  name: 'Vasya',
  age: 21,
  likes: 9,
  comments: 14,
  status: 'active',
  'last online': '23.01.2025',
  autorized: true,
  balance: 170,
};

console.log(util.getSumNumbersInObject(user));
console.log(util.getSortedArrayByNumbers(user));
