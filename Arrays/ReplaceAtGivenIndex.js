const replaceAt = (arr, index, element) => {
  if (index < 0 || index >= arr.length) return arr;
  arr[index] = element;
  return arr;
};

console.log(replaceAt([1, 2, 3, 4], 2, 99));
