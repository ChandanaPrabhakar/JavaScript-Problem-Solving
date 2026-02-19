const floor = (n) => {
  return n >= 0 ? n | 0 : (n | 0) + 1;
};

console.log(floor(4.7));
