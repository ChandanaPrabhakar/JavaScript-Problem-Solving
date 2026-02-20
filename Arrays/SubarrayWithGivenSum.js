const subarrayWithGivenSum = (arr, target) => {
  let left = 0,
    sum = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > target && left <= right) {
      sum -= arr[left++];
    }

    if (sum === target) {
      return [left, right];
    }
  }

  return -1;
};

console.log(subarrayWithGivenSum([1, 4, 20, 3, 10, 5], 33));
