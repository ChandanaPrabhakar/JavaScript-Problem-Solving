const moveZeros = (arr) => {
  let k = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 0) {
      arr[k--] = arr[i];
    }
  }
  while (k >= 0) {
    arr[k--] = 0;
  }
  return arr;
};

console.log(moveZeros([0, 1, 0, 3, 12]));
