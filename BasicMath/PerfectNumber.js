const perfectNumber = (n) => {
  if (n <= 1) return false;
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
};

console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(496));
