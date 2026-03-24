// Longest Subarray of 1s After Deleting One Element
export function longestSubarrayAfterDeleting(nums: number[]): number {
  let maximumLength: number = 0;
  let zeroCount: number = 0;
  let start: number = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) zeroCount++;

    while (zeroCount > 1) {
      if (nums[start] === 0) zeroCount--;
      start++;
    }
    maximumLength = Math.max(maximumLength, end - start);
  }
  return maximumLength;
}
