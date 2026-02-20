const splitHalf = (arr) => {
  const mid = Math.floor(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid, arr.length)];
};

console.log(splitHalf([1, 2, 3, 4, 5, 6]));
console.log(splitHalf([1, 2, 3, 4, 5]));
