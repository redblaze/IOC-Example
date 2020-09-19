const add = require('./add.js');
const mult = require('./mult.js');

module.exports = function(a, b) {
  return add(
    mult(a,a), 
    mult(b,b)
  );
};

