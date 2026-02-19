const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndx]) {
        minIndx = j;
      }
    }
    [arr[i], arr[minIndx]] = [arr[minIndx], arr[i]];
  }
  return arr;
};

console.log(selectionSort([5, 2, 9, 1, 3]));
