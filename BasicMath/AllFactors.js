const factors = (n) => {
  n = Math.abs(n);
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
      if (i !== n / i) {
        console.log(n / i);
      }
    }
  }
};

factors(36);
