const commonInThree = (a, b, c) => {
  const setA = new Set(a);
  const setB = new Set(b);
  return [...new Set(c)].filter((x) => setA.has(x) && setB.has(x));
};

console.log(commonInThree([1, 2, 3, 4], [2, 3, 5], [2, 6, 3]));
