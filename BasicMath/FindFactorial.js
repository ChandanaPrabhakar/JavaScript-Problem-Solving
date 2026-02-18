const factorial = (n) => {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
};

console.log("Iteration: " + factorial(5));

const factRec = (n) => {
  if (n === 1) return n;
  return n * factRec(n - 1);
};

console.log("Recursion: " + factRec(5));
