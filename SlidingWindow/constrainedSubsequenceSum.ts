// Constrained Subsequence Sum
export function constrainedSubsequenceSum(nums: number[], k: number): number {
  const n: number = nums.length;
  const dp: number[] = new Array<number>(n).fill(0);
  let maximumSum: number = nums[0];
  let deque: number[] = [];

  for (let index: number = 0; index < n; index++) {
    while (deque.length > 0 && deque[0] < index - k) {
      deque.shift();
    }

    dp[index] =
      nums[index] + (deque.length > 0 ? Math.max(0, dp[deque[0]]) : 0);
    maximumSum = Math.max(maximumSum, dp[index]);

    while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[index]) {
      deque.pop();
    }
    deque.push(index);
  }
  return maximumSum;
}
