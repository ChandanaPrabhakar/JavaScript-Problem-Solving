const divisible = (n) => {
  if (n < 3) return;
  for (let i = 3; i <= n; i += 3) {
    console.log(i);
  }
};

divisible(25);
