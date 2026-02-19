const round = (n) => {
  return n % 1 >= 0.5 ? (n | 0) + 1 : n | 0;
};

console.log(round(4.7));
