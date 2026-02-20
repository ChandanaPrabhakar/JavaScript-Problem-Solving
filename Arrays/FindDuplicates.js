const findDuplicates = (arr) => {
  const freq = {};
  const result = [];

  for (let n of arr) {
    freq[n] = (freq[n] || 0) + 1;
  }

  for (let key in freq) {
    if (freq[key] > 1) result.push(Number(key));
  }
  return result;
};

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 1]));
