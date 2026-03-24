// Binary Subarray With Sum -> sliding window approach
export function binarySubarrayWithSum(arr: number[], k: number): number {
  return atMostK(arr, k) - atMostK(arr, k - 1);
}

function atMostK(nums: number[], k: number): number {
  let count: number = 0;
  let start: number = 0;
  let sum: number = 0;

  for (let end: number = 0; end < nums.length; end++) {
    if (k < 0) return 0;
    sum += nums[end];

    while (sum > k) {
      sum -= nums[start];
      start++;
    }
    count += end - start + 1;
  }
  return count;
}

// Binary Subarray With Sum -> prefix + HashMap approach

export function binarySubarrayWithSumPrefixHash(
  arr: number[],
  k: number,
): number {
  let prefix: number = 0;
  let count: number = 0;
  const map = new Map<number, number>();
  map.set(0, 1);

  for (let end: number = 0; end < arr.length; end++) {
    prefix += arr[end];

    if (map.has(prefix - k)) {
      count += map.get(prefix - k)!;
    }
    map.set(prefix, (map.get(prefix) || 0) + 1);
  }
  return count;
}
