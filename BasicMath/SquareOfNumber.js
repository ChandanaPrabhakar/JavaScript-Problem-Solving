const square = (n) => {
  return n * n;
};

console.log(square(3));

const builtInSquare = (n) => {
  return Math.pow(n, 2);
};

console.log(builtInSquare(4));

const asteriskSquare = (n) => {
  return n ** 2;
};

console.log(asteriskSquare(5));

// n * n        🥇 fastest
// n ** 2       🥈 slightly slower
// Math.pow()   🥉 slowest
