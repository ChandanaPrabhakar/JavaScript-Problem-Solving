const countPandN = (arr) => {
  let countP = 0,
    countN = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) countN++;
    else if (arr[i] > 0) countP++;
  }
  return [countP, countN];
};

console.log(countPandN([3, -1, 0, 5, -7]));
