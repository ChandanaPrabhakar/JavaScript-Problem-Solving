const area = (r) => {
  const a = Math.PI * r * r;
  return Number(a.toFixed(3));
};

console.log(area(3));
