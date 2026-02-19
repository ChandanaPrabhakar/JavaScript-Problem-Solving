const insert = (arr, index, element) => {
  arr.splice(index, 0, element);
  return arr;
};

console.log(insert([1, 2, 3, 4], 2, 99));
