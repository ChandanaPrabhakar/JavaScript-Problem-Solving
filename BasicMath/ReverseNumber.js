const reverse = (n) => {
  let result = 0;
  while (n > 0) {
    result = result * 10 + (n % 10);
    n = Math.floor(n / 10);
  }
  return result;
};

console.log(reverse(123456));
