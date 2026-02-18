const check = (n) => {
  if (n === 0) return "Zero";
  return n > 0 ? "Positive" : "Negative";
};

console.log(check(9));
console.log(check(-3));
console.log(check(0));
