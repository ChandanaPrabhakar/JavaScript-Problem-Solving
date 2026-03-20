// Maximum Sum Subarray of Size K

export function maximumSubarraySum(array: number[], k: number): number {
  if (k > array.length) return 0;
  let start: number = 0;
  let sum: number = 0;
  let result: number = -Infinity;

  for (let end: number = 0; end < array.length; end++) {
    sum += array[end];

    if (end - start + 1 === k) {
      result = Math.max(result, sum);
      sum -= array[start];
      start++;
    }
  }
  return result;
}
