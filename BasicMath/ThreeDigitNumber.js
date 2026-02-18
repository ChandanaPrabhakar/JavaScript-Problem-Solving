const check = (n) => {
  n = Math.abs(n);
  return 100 <= n && n <= 999;
};

console.log(check(109));
