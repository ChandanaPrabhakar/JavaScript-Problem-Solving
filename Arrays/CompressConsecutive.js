const compressConsecutive = (arr) => {
  if (arr.length === 0) return arr;

  let k = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[k++] = arr[i];
    }
  }
  arr.length = k;
  return arr;
};
console.log(compressConsecutive([1, 1, 2, 2, 2, 3, 1, 1]));
