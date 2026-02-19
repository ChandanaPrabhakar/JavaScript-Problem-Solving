const intersection = (a, b) => {
  const setB = new Set(b);

  return [...new Set(a)].filter((x) => setB.has(x));
};

console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6]));
