//toFixed() ->. return string
const circumference = (r) => {
  const c = 2 * Math.PI * r;
  return Number(c.toFixed(3));
};

console.log(circumference(3));

//Math.round -> explicit n*1000 / 1000
const circumferenceMath = (r) => {
  const c = 2 * Math.PI * r;
  return Math.round(c * 1000) / 1000;
};

console.log(circumferenceMath(3));

//Math.trunc -> actual cut to 3 no round off
const circumferenceTrunc = (r) => {
  const c = 2 * Math.PI * r;
  return Math.trunc(c, 3);
};

console.log(circumferenceMath(3));
