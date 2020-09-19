module.exports = function(pkg, a, b) {
  return pkg.add(
    pkg.mult(a,a), 
    pkg.mult(b,b)
  );
};

