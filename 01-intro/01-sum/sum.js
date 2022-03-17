function sum(a, b) {
  [...arguments].map(i => {
    if (typeof i !== 'number') {
      throw new TypeError('Not a number')
    }
  });

  return a + b;
}

module.exports = sum;
