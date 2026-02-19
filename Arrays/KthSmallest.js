const kthSmallest = (arr, k) => {
  arr.sort((a, b) => a - b);
  return arr[k - 1];
};

console.log(kthSmallest([3, 2, 1, 5, 6, 4], 2));
