// Minimum Size Subarray Sum
export function minimumSubarraySum(nums: number[], target: number): number {
  let start: number = 0;
  let sum: number = 0;
  let minimumLength = Infinity;

  for (let end: number = 0; end < nums.length; end++) {
    sum += nums[end];
    while (sum >= target) {
      minimumLength = Math.min(minimumLength, end - start + 1);
      sum -= nums[start];
      start++;
    }
  }
  return minimumLength;
}
