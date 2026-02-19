const equal = (a, b) => {
  a.sort((x, y) => x - y);
  b.sort((x, y) => x - y);
  return a.length === b.length && a.every((v, i) => v === b[i]);
};

//ignore order
console.log(equal([1, 2, 3], [3, 2, 1]));
