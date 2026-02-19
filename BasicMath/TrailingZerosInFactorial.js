const trailing = (n) => {
  let c = 0;
  for (let i = 5; i <= n; i *= 5) {
    c += Math.floor(n / i);
  }
  return c;
};

console.log(trailing(25));
