const even = (n) => {
  n = Math.abs(n);
  if (n === 0) return 1;
  let count = 0;
  while (n > 0) {
    let digit = n % 10;
    if (digit % 2 === 0) count++;
    n = Math.floor(n / 10);
  }
  return count;
};

console.log(even(123456));
console.log(even(111));
