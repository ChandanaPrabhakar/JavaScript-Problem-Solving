const lcm = (a, b) => {
  if (a === 0 || b === 0) return 0;
  let result = Math.abs(a * b) / gcd(a, b);
  return result;
};

const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

console.log(lcm(12, 18));
console.log(lcm(4, 6));
