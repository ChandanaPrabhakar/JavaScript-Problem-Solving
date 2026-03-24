// Count Number of Nice Subarray
export function countNumberofNiceSubarray(arr: number[], k: number): number {
  return atmostK(arr, k) - atmostK(arr, k - 1);
}

function atmostK(nums: number[], k: number): number {
  let count: number = 0;
  let start: number = 0;

  for (let end = 0; end < nums.length; end++) {
    if (nums[end] % 2 === 1) k--;

    while (k < 0) {
      if (nums[start] % 2 === 1) k++;
      start++;
    }
    count += end - start + 1;
  }
  return count;
}
