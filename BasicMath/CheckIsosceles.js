const validate = (a, b, c) => {
  let valid = a + b > c && a + c > b && b + c > a;
  if (!valid) return false;
  return a === b || b === c || a === c;
};

console.log(validate(5, 5, 8));
console.log(validate(2, 3, 4));
