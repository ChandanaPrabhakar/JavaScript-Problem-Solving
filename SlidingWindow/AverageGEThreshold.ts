// Number of Subarray of Size K with Average ≥ Threshold

export function averageGreaterEqualThreshold(
  arr: number[],
  k: number,
  treshold: number,
): number {
  let countSubarray: number = 0;
  let sum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];
    if (end - start + 1 === k) {
      const average = sum / k;
      if (average >= treshold) {
        countSubarray++;
      }
      sum -= arr[start];
      start++;
    }
  }
  return countSubarray;
}
