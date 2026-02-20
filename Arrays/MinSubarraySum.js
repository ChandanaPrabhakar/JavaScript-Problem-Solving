const minSubArraySum = (arr) => {
  let minSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    currentSum = Math.min(arr[i], currentSum + arr[i]);
    minSum = Math.min(currentSum, minSum);
  }
  return minSum;
};
console.log(minSubArraySum([3, -4, 2, -3, -1, 7, -5]));
