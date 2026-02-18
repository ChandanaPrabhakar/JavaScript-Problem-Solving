const validate = (a, b, c) => {
  const sides = [a, b, c].sort((x, y) => x - y);
  return sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2;
};

console.log(validate(3, 4, 5));
console.log(validate(5, 6, 7));
