const perfect = (n) => {
  return Number.isInteger(Math.cbrt(n));
};

console.log(perfect(9));
console.log(perfect(8));
