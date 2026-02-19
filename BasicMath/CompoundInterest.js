const compoundInterest = (p, r, t) => {
  const amount = p * (1 + r / 100) ** t;
  return amount - p;
};

console.log(compoundInterest(1000, 10, 2));
