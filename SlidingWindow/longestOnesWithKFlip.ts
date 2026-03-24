// Longest Ones with K Flips
export function longestOnesWithKFlip(nums: number[], k: number): number {
  let maximumLength: number = 0;
  let zeroCount: number = 0;
  let start: number = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] === 0) zeroCount++;
    while (zeroCount > k) {
      if (nums[start] === 0) zeroCount--;
      start++;
    }
    maximumLength = Math.max(maximumLength, end - start + 1);
  }
  return maximumLength;
}
