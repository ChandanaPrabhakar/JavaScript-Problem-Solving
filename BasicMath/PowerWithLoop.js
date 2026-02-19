const power = (base, exp) => {
  let result = 1;
  for (let i = 1; i <= exp; i++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 5));
console.log(power(3, 4));
