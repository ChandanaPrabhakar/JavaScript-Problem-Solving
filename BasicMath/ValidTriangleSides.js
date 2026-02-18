const validate = (a, b, c) => {
  return a + b > c && a + c > b && b + c > a;
};

console.log(validate(2, 3, 4));
console.log(validate(2, 2, 7));
