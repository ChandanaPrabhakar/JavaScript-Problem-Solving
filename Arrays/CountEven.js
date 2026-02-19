const countEven = (arr) => {
  let count = 0;
  for (let n of arr) {
    if (n % 2 === 0) count++;
  }
  return count;
};

console.log(countEven([1, 2, 3, 4, 5, 6, 8]));
