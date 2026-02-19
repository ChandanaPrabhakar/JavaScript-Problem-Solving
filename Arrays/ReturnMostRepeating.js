const mostRepeating = (arr) => {
  const freq = {};
  let max = 0;
  let result = null;
  for (let n of arr) {
    freq[n] = (freq[n] || 0) + 1;
    if (freq[n] > max) {
      max = freq[n];
      result = n;
    }
  }
  return result;
};
console.log(mostRepeating([2, 3, 4, 2, 3, 5, 4, 4]));
