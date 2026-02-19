const removeAll = (arr, target) => {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== target) {
      arr[k++] = arr[i];
    }
  }
  arr.length = k;
  return arr;
};

console.log(removeAll([1, 2, 3, 2, 4, 2], 2));
