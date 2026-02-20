const randomElement = (arr) => {
  if (arr.length === 0) return undefined;
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

console.log(randomElement([10, 20, 30, 40]));
