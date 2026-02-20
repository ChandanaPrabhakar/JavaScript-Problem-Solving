const rearrangeAlternative = (arr) => {
  let posIndex = 0,
    negIndex = 1;
  const n = arr.length;

  while (posIndex < n && negIndex < n) {
    if (arr[posIndex] >= 0) {
      posIndex += 2;
    } else if (arr[negIndex] < 0) {
      negIndex += 2;
    } else {
      [arr[posIndex], arr[negIndex]] = [arr[negIndex].arr[posIndex]];
      posIndex += 2;
      negIndex += 2;
    }
  }
  return arr;
};

console.log(rearrangeAlternative([1, -2, 3, -4, 4, -1]));
