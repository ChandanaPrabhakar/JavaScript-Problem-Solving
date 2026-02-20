const longestIncreasingSubarray = (arr) => {
  if (arr.length === 0) return [];
  let maxStart = 0,
    maxLen = 1;
  let start = 0,
    len = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      len++;
    } else {
      start = i;
      len = 1;
    }

    if (len > maxLen) {
      maxLen = len;
      maxStart = start;
    }
  }
  return arr.slice(maxStart, maxStart + maxLen);
};

console.log(longestIncreasingSubarray([1, 2, 2, 3, 4, 1, 2, 3, 4, 5]));
