const union = (a, b) => {
  return [...new Set([...a, ...b])];
};

console.log(union([1, 2, 3], [3, 4, 5]));
