const median = (arr) => {
  const a = [...arr].sort((x, y) => x - y);
  const m = Math.floor(a.length / 2);
  return a.length % 2 ? a[m] : (a[m - 1] + a[m]) / 2;
};

console.log(median([5, 3, 1, 4, 2]));
console.log(median([1, 2, 3, 4]));
