const largest = (n) => {
  n = Math.abs(n);
  if (n === 0) return 0;
  let biggest = 0;

  while (n > 0) {
    biggest = Math.max(biggest, n % 10);
    n = Math.floor(n / 10);
  }
  return biggest;
};

console.log(largest(12543));
console.log(largest(-14765));
