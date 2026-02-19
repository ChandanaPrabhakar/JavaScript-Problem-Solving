const duplicate = (arr) => {
  return [...new Set(arr)];
};

console.log(duplicate([1, 2, 2, 3, 4, 2, 2, 5]));
