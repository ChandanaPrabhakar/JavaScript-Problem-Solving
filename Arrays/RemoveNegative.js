const removeNegative = (arr) => {
  return arr.filter((x) => x >= 0);
};

console.log(removeNegative([1, 2, -3, 4, -5, 7]));
