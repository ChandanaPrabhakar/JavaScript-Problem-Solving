const mode = (arr) => {
  if (arr.length === 0) return [];

  const map = {};
  let max = 0;
  for (let n of arr) {
    map[n] = (map[n] || 0) + 1;
    max = Math.max(max, map[n]);
  }
  return Object.keys(map)
    .filter((k) => map[k] === max)
    .map(Number);
};

console.log(mode([1, 2, 2, 3, 3]));
