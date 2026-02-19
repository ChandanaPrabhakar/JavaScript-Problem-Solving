const kthLargest = (arr, k) => {
  arr.sort((x, y) => x - y);
  return arr[arr.length - k];
};

console.log(kthLargest([3, 2, 1, 5, 6, 4], 2));
