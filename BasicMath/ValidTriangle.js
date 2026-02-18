const validate = (a, b, c) => {
  return a + b + c === 180 && a > 0 && b > 0 && c > 0;
};

console.log(validate(70, 50, 60));
console.log(validate(20, 50, 60));
console.log(validate(70, 50, 70));
