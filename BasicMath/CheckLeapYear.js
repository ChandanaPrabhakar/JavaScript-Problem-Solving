const leap = (n) => {
  if (n % 400 === 0) return true;
  if (n % 100 === 0) return false;
  return n % 4 === 0;
};

console.log(leap(2000));
console.log(leap(1999));
