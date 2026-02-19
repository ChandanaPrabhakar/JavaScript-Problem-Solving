const groupEvenOdd = (arr) => {
  const even = [];
  const odd = [];
  for (let n of arr) {
    if (n % 2 === 0) even.push(n);
    else odd.push(n);
  }
  return { even, odd };
};
console.log(groupEvenOdd([1, 2, 3, 4, 5, 6]));
