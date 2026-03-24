// Longest Continuous Subarray With Absolute Diff ≤ Limit
export function longestContinuousSubarray(
  nums: number[],
  limit: number,
): number {
  let maximumLength: number = 0;
  let start: number = 0;

  const maxDeque: number[] = []; // decreasing
  const minDeque: number[] = []; // increasing

  for (let end: number = 0; end < nums.length; end++) {
    while (
      maxDeque.length > 0 &&
      nums[maxDeque[maxDeque.length - 1]] < nums[end]
    ) {
      maxDeque.pop();
    }
    maxDeque.push(end);

    while (
      minDeque.length > 0 &&
      nums[minDeque[minDeque.length - 1]] > nums[end]
    ) {
      minDeque.pop();
    }
    minDeque.push(end);

    while (nums[maxDeque[0]] - nums[minDeque[0]] > limit) {
      if (minDeque[0] === start) minDeque.shift();
      if (maxDeque[0] === start) maxDeque.shift();
      start++;
    }
    maximumLength = Math.max(maximumLength, end - start + 1);
  }
  return maximumLength;
}
