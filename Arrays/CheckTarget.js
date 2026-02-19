const findTarget = (arr, target) => {
  for (let n of arr) {
    if (n === target) {
      return true;
    }
  }
  return false;
};

console.log(findTarget([1, 2, 3, 4, 5], 5));
console.log(findTarget([1, 2, 3, 4, 5], 7));
