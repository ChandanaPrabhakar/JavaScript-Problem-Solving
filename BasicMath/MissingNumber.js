const missing = (arr, n) => {
  const sum = (n * (n + 1)) / 2;
  let sumArray = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArray += arr[i];
  }
  return sum - sumArray;
};

console.log(missing([1, 2, 4, 5], 5));
