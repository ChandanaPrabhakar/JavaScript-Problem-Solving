const cube = (n) => {
  return n * n * n;
};

console.log(cube(5));

// n * n * n       🥇 fastest
// n ** 3       🥈 slightly slower
// Math.pow(n,3)   🥉 slowest
