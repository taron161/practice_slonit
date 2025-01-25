const calculate = (a, b, mathOperation) => {
  return mathOperation(a, b);
};

const multiplyNubms = function (a, b) {
  return a * b;
};

const dividedNubms = function (a, b) {
  return a / b;
};

const addNubms = function (a, b) {
  return a + b;
};

const subtractNubms = function (a, b) {
  return a - b;
};

const operations = {
  multiply: multiplyNubms,
  divide: dividedNubms,
  add: addNubms,
  subtract: subtractNubms,
};
const selectedOperation = "divide";

console.log(calculate(1, 3, operations[selectedOperation]));