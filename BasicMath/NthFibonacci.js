const fibonacci = (n) => {
  if (n <= 1) return n;
  let prev = 0,
    curr = 1;
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
};

console.log(fibonacci(5));
console.log(fibonacci(0));
console.log(fibonacci(1));
