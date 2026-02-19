const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

console.log(gcd(48, 18));
console.log(gcd(20, 8));
