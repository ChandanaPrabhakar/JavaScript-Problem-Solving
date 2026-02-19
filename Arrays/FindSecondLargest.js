const secondLargest = (arr) => {
  arr.sort((x, y) => y - x);
  return arr[1];
};
console.log(secondLargest([2, 1, 3, 5, 4, 8, 7, 9, 6]));
