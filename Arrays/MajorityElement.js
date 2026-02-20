const majorityElement = (arr) => {
  let count = 0,
    element = null;
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) element = arr[i];
    element === arr[i] ? count++ : count--;
  }
  return element;
};

console.log(majorityElement([2, 2, 1, 2, 3, 2, 2]));
