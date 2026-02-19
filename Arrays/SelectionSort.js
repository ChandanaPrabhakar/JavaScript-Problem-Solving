const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let midIndx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[midIndx]) {
        midIndx = j;
      }
    }
    [arr[i], arr[midIndx]] = [arr[midIndx], arr[i]];
  }
  return arr;
};

console.log(selectionSort([5, 2, 9, 1, 3]));
