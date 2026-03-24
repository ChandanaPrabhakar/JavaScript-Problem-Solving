// Subarray with K Distinct Integers
function atmostK(nums: number[], k: number): number {
  let maximumLength: number = 0;
  let start: number = 0;

  const map = new Map<number, number>();

  for (let end: number = 0; end < nums.length; end++) {
    const num: number = nums[end];

    map.set(num, (map.get(num) || 0) + 1);

    while (map.size > k) {
      const leftNumber: number = nums[start];
      map.set(leftNumber, map.get(leftNumber)! - 1);
      if (map.get(leftNumber) === 0) {
        map.delete(leftNumber);
      }
      start++;
    }

    maximumLength = Math.max(maximumLength, end - start + 1);
  }
  return maximumLength;
}

export function subarrayDistinctInteger(arr: number[], k: number): number {
  return atmostK(arr, k) - atmostK(arr, k - 1);
}
