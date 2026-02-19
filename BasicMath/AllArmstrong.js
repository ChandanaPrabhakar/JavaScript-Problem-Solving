const check = (n) => {
  n = Math.abs(n);
  if (n === 0) return true;
  let length = Math.floor(Math.log10(n)) + 1;
  let sum = 0,
    temp = n;
  while (temp > 0) {
    sum += (temp % 10) ** length;
    temp = Math.floor(temp / 10);
  }
  return n === sum;
};

const armstrong = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (check(i)) {
      console.log(i);
    }
  }
};

armstrong(1, 1000);
