const mode = (arr) => {
  if (arr.length === 0) return [];
  const freq = {};
  let max = 0;

  for (let n of arr) {
    freq[n] = (freq[n] || 0) + 1;
    max = Math.max(freq[n], max);
  }

  return Object.keys(freq)
    .filter((k) => freq[k] === max)
    .map(Number);
};

console.log(mode([1, 2, 2, 3, 3, 3, 4]));
