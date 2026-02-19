const isPalindrome = (arr) => {
  let i = 0,
    j = arr.length - 1;
  while (i < j) {
    if (arr[i] !== arr[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome([1, 2, 3, 2, 1]));
console.log(isPalindrome([1, 2, 3, 4]));
