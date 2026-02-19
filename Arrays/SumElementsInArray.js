const sumArray = (arr) => {
  let sum = 0;
  for (let n of arr) {
    sum += n;
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5, 6]));
