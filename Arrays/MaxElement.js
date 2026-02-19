const maxElement = (arr) => {
  arr.sort((x, y) => y - x);
  return arr[0];
};

console.log(maxElement([2, 1, 4, 3, 7, 5]));
