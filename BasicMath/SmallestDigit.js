const smallest = (n) => {
  n = Math.abs(n);
  if (n === 0) return n;
  let smallest = Number.MAX_VALUE;
  while (n > 0) {
    smallest = Math.min(smallest, n % 10);
    n = Math.floor(n / 10);
  }
  return smallest;
};

console.log(smallest(56187));
console.log(smallest(-76012));
