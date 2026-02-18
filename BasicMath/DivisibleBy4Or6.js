const divisible = (n) => {
  return n % 4 === 0 || n % 6 === 0;
};

console.log(divisible(24));
console.log(divisible(28));
console.log(divisible(30));
