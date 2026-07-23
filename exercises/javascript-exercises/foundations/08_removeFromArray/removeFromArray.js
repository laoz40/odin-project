const removeFromArray = function (array, ...args) {
  const newArray = array.filter((value) => !args.includes(value));
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
