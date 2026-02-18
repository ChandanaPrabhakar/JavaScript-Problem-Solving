const compare = (a, b) => {
  return Math.abs(a - b) < 1e-9;
};

console.log(compare(0.1 + 0.2, 0.3));
console.log(compare(1.5, 1.5));
