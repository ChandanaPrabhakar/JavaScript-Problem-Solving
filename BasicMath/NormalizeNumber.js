const normalize = (x, min, max) => {
  return (x - min) / (max - min);
};
console.log(normalize(75, 50, 100));
