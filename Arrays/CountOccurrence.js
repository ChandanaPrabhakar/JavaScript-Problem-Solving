const countOccurrence = (arr, target) => {
  return arr.filter((x) => x === target).length;
};

console.log(countOccurrence([1, 2, 2, 3, 4, 2, 5, 2], 2));
