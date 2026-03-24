// Maximum Erasure Value
export function maximumEraseValue(nums: number[]): number {
  let start: number = 0;
  let currentSum: number = 0;
  let maximumSum: number = 0;

  const set = new Set<number>();

  for (let end = 0; end < nums.length; end++) {
    while (set.has(nums[end])) {
      set.delete(nums[start]);
      currentSum -= nums[start];
      start++;
    }

    set.add(nums[end]);
    currentSum += nums[end];

    maximumSum = Math.max(maximumSum, currentSum);
  }
  return maximumSum;
}
