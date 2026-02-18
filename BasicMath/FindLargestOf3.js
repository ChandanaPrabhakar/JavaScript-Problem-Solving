const largest = (a, b, c) => {
  return a > b && a > c ? a : b > c ? b : c;
};

console.log(largest(1, 2, 3));
console.log(largest(2, 6, 4));
console.log(largest(9, 1, 2));
