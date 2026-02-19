const odd = (n) => {
  n = Math.abs(n);
  if (n === 1) return 1;
  let count = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digit % 2 !== 0) count++;
    n = Math.floor(n / 10);
  }
  return count;
};

console.log(odd(123456));
console.log(odd(2468));
