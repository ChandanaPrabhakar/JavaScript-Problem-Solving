const fibonacci = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const result = [0, 1];
  let prev = 0,
    curr = 1;
  for (let i = 2; i < n; i++) {
    let temp = prev + curr;
    prev = curr;
    curr = temp;
    result.push(curr);
  }
  return result;
};

console.log(fibonacci(5));
console.log(fibonacci(0));
console.log(fibonacci(1));
