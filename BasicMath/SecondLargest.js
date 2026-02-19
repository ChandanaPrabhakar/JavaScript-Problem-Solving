const secondLargest = (arr) => {
  const unique = [...new Set(arr)].sort((x, y) => y - x);
  return unique[1];
};

console.log(secondLargest([10, 5, 20, 8]));
