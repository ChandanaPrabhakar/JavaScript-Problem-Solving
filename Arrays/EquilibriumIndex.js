const equilibriumIndex = (arr) => {
  let total = arr.reduce((sum, val) => sum + val, 0);
  let left = 0;
  for (let i = 0; i < arr.length; i++) {
    total -= arr[i];

    if (left === total) return i;
    left += arr[i];
  }
  return -1;
};

console.log(equilibriumIndex([1, 3, 5, 2, 2]));
