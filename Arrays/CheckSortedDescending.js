const checkSorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) return false;
  }
  return true;
};

console.log(checkSorted([5, 4, 3, 2, 1]));
console.log(checkSorted([1, 2, 6, 4, 5]));
