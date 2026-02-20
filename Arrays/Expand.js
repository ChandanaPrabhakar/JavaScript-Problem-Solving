const expand = (arr) => {
  const result = [];

  for (let [value, count] of arr) {
    for (let i = 0; i < count; i++) {
      result.push(value);
    }
  }
  return result;
};

console.log(
  expand([
    [1, 3],
    [2, 2],
    [5, 1],
  ]),
);
