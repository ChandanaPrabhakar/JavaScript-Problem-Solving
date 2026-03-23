// Count Subarray With Score < K

export function countSubarrayScore(arr: number[], k: number): number {
  let count: number = 0;
  let sum: number = 0;
  let start: number = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    while (sum * (end - start + 1) >= k) {
      sum -= arr[start];
      start++;
    }
    count += end - start + 1;
  }
  return count;
}
