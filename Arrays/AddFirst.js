const addFirst = (arr, n) => {
  arr.unshift(n);
  return arr;
};

console.log(addFirst([1, 2, 3, 4, 5], 7).toString());
