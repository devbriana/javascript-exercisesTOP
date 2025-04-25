const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accum, item) => accum + item, 0);
};

const multiply = function(arr) {
  return arr.reduce((accum, item) => accum * item);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let emptyArr = [];
  if (num === 0) {
    return 1;
  }
  for (let i = num; i >= 1; i--) {
    emptyArr.push(i);
  }
  return emptyArr.reduce((accum, item) => accum * item);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
