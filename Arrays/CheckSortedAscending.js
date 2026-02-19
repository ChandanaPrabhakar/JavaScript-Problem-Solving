const checkSorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) return false;
  }
  return true;
};

console.log(checkSorted([1, 2, 3, 4, 5]));
console.log(checkSorted([1, 2, 6, 4, 5]));
