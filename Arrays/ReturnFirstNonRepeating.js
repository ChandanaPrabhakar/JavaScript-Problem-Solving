const firstNonRepeating = (arr) => {
  const freq = {};
  for (let n of arr) {
    freq[n] = (freq[n] || 0) + 1;
  }

  for (let n of arr) {
    if (freq[n] === 1) return n;
  }
  return null;
};

console.log(firstNonRepeating([2, 3, 4, 2, 3, 5, 4]));
