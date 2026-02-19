const minElement = (arr) => {
  arr.sort((x, y) => x - y);
  return arr[0];
};

console.log(minElement([3, 4, 1, 5, 2, 0]));
