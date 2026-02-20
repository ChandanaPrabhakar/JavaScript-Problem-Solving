const leader = (arr) => {
  const result = [];
  let maxFromRight = arr[arr.length - 1];
  result.push(maxFromRight);

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxFromRight) {
      maxFromRight = arr[i];
      result.push(arr[i]);
    }
  }
  return result.reverse();
};

console.log(leader([16, 17, 4, 3, 5, 2]));
