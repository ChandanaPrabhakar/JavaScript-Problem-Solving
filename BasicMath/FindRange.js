const range = (arr) => {
  if (arr.length === 0) return null;
  let min = arr[0];
  let max = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return max - min;
};

console.log(range([3, 7, 2, 9, 4]));
