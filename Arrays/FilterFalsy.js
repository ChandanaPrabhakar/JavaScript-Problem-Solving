const filterFalsy = (arr) => {
  return arr.filter(Boolean);
};

console.log(filterFalsy([0, 1, false, 2, "", 3, null, undefined, NaN]));
