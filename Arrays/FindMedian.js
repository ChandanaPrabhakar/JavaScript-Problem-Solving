const median = (arr) => {
  arr.sort((a, b) => a - b);
  const m = Math.floor(arr.length / 2);
  return arr.length % 2 ? arr[m] : (arr[m] + arr[m - 1]) / 2;
};

console.log(median([5, 3, 1, 4, 2]));
console.log(median([1, 2, 3, 4]));
