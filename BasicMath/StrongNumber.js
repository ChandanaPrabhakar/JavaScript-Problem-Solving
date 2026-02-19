const factorial = (n) => {
  let fact = 1;
  while (n > 0) {
    fact *= n;
    n--;
  }
  return fact;
};

const strongNumber = (n) => {
  n = Math.abs(n);
  let sum = 0;
  let duplicate = n;
  while (duplicate > 0) {
    sum += factorial(duplicate % 10);
    duplicate = Math.floor(duplicate / 10);
  }
  return sum === n;
};

console.log(strongNumber(145));
console.log(strongNumber(2));
console.log(strongNumber(123));
