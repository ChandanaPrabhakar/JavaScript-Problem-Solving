const digitProduct = (n) => {
  let product = 1;
  while (n > 0) {
    product *= n % 10;
    n = Math.floor(n / 10);
  }
  return product;
};

console.log(digitProduct(1234));
