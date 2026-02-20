Array.prototype.myReduce = function (callback, intialValue) {
  let accumulator = intialValue;
  let startIndex = 0;

  if (accumulator === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }
  return accumulator;
};

console.log([1, 2, 3, 4].myReduce((sum, x) => sum + x, 0));
