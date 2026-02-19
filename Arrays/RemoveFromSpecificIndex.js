const remove = (arr, index) => {
  if (index < 0 || index >= arr.length) return arr;
  arr.splice(index, 1);
  return arr;
};

console.log(remove([1, 2, 3, 4, 5], 2));
