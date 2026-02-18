const validate = (a, b, c) => {
  return a === b && b === c;
};

console.log(validate(4, 4, 4));
console.log(validate(2, 2, 7));
