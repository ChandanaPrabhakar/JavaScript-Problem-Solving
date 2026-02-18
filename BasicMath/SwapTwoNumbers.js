const swap = (a, b) => {
  const temp = a;
  a = b;
  b = temp;
  return [a, b];
};

console.log(swap(4, 5));
