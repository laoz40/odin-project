const sumAll = function (a, b) {
  if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
    return "ERROR";
  }

  const min = Math.min(a, b);
  const max = Math.max(a, b);

	return ((max - min + 1) * (min + max)) / 2;

	// -- Bad O(n) solution
  // let sum = 0;
  // for (let i = min; i <= max; i++) {
  //   sum = sum + i;
  // }
  // return sum;
};

// Do not edit below this line
module.exports = sumAll;
