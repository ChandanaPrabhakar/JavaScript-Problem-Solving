const check = (n) => {
  n = Math.abs(n);

  const length = n === 0 ? 1 : Math.floor(Math.log10(n)) + 1;
  let sum = 0;
  let duplicate = n;
  while (duplicate > 0) {
    sum += (duplicate % 10) ** length;
    duplicate = Math.floor(duplicate / 10);
  }
  return n === sum;
};

console.log(check(153));
console.log(check(123));
