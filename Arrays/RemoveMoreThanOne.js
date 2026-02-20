const removeRepeating = (arr) => {
  const freq = {};
  for (let n of arr) {
    freq[n] = (freq[n] || 0) + 1;
  }

  return arr.filter((x) => freq[x] === 1);
};
console.log(removeRepeating([1, 2, 2, 3, 4, 4, 5]));
