const countUnique = (arr) => {
  return [...new Set(arr)].length;
};

console.log(countUnique([1, 2, 2, 3, 3, 3, 4, 5, 5, 6]));
