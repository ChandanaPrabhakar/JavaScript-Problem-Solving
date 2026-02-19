const flatten = (arr) => {
  return arr.reduce((acc, val) => acc.concat(val), []);
};

console.log(flatten([1, [2, 3], 4, [5, 6]]));
