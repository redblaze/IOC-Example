const addGen = require('./add.js');
const multGen = require('./mult.js');
const xuanGen = require('./xuan.js');


const pkg = {
  add: function(a, b) {
    return addGen(pkg, a, b);
  },

  mult: function(a, b) {
    return multGen(pkg, a, b);
  },

  xuan: function(a, b) {
    return xuanGen(pkg, a, b);
  }
};

module.exports = pkg;
