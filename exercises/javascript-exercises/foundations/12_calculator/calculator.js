const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  let sum = 0;
  numbers.forEach((number) => {
    sum = sum + number;
  });
  return sum;
};

const multiply = function (numbers) {
  let total = 1;
  numbers.forEach((number) => {
    total = total * number;
  });
  return total;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (x) {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
