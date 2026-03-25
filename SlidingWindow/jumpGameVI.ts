// Jump Game VI
export function jumpGameVI(nums: number[], k: number): number {
  const dp: number[] = new Array<number>(nums.length).fill(0);
  const deque: number[] = [0];

  dp[0] = nums[0];

  for (let index: number = 1; index < nums.length; index++) {
    while (deque.length > 0 && deque[0] < index - k) {
      deque.shift();
    }

    dp[index] = nums[index] + dp[deque[0]];

    while (deque.length > 0 && dp[deque[deque.length - 1]] <= dp[index]) {
      deque.pop();
    }
    deque.push(index);
  }
  return dp[nums.length - 1];
}
