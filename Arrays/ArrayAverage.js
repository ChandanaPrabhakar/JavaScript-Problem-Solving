const averageArray = (arr) => {
  const length = arr.length;
  let sum = 0;
  for (let n of arr) {
    sum += n;
  }
  return sum / length;
};

console.log(averageArray([1, 2, 3, 4, 5]));
