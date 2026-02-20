const longestDecreasingSubarray = (arr) => {
  if (arr.length === 0) return arr;

  let maxStart = 0,
    maxLen = 1;
  let start = 0,
    len = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
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

console.log(longestDecreasingSubarray([9, 7, 5, 6, 4, 3, 2, 8]));
