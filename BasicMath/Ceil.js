const ceil = (n) => {
  return n % 1 === 0 ? n : (n | 0) + 1;
};

console.log(ceil(4.7));
