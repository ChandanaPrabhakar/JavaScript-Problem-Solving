const missingNumber = (arr, n) => {
  const sum1 = (n * (n + 1)) / 2;
  const sum2 = arr.reduce((sum, val) => sum + val, 0);
  return sum1 - sum2;
};

console.log(missingNumber([1, 2, 3, 4, 6], 6));
