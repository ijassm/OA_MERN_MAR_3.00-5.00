// const ex = {};

// ex.a = "fjg";

// console.log(ex);

module.exports.sum = function sum(...arr) {
  return arr.reduce((acc, cur) => acc + cur);
};

// module.exports = sum;
// module.exports.sum = sum;

console.log(module);
