const palindrome = (n) => {
  if (n < 0) return false;
  let reverse = 0;
  let duplicate = n;
  while (duplicate > 0) {
    reverse = reverse * 10 + (duplicate % 10);
    duplicate = Math.floor(duplicate / 10);
  }
  return n === reverse;
};

console.log(palindrome(12221));
console.log(palindrome(123456));
