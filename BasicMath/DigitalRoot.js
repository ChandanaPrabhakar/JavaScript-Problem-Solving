const root = (n) => {
  n = Math.abs(n);
  if (n === 0) return 0;
  return 1 + ((n - 1) % 9);
};

console.log(root(9875));
