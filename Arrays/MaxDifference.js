const maxDifference = (arr) => {
  if (arr.length < 2) return 0;
  let minElement = arr[0];
  let difference = -Infinity;

  for (let n in arr) {
    difference = Math.max(difference, n - minElement);
    minElement = Math.min(minElement, n);
  }
  return difference;
};

console.log(maxDifference([7, 1, 5, 3, 6, 4]));
