const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};
const coPrime = (a, b) => {
  return gcd(a, b) === 1;
};

console.log(coPrime(8, 15));
console.log(coPrime(12, 18));
console.log(coPrime(7, 20));
