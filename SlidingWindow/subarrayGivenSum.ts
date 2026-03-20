// Subarray with Given Sum

// If all non-negative -> Sliding Window

export function subarrayWithGivenSumNonNegative(
  arr: number[],
  target: number,
): number[] {
  let currentSum = 0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    currentSum += arr[windowEnd];

    if (currentSum > target && windowStart <= windowEnd) {
      currentSum -= arr[windowStart];
      windowStart++;
    }

    if (currentSum === target) {
      return [windowStart, windowEnd];
    }
  }
  return [-1, -1];
}

// Else -> PrefixSum + HashMap
export function subarrayWithGivenSum(arr: number[], target: number): number[] {
  const map = new Map<number, number>();
  let prefixSum = 0;

  map.set(0, -1);

  for (let index = 0; index < arr.length; index++) {
    prefixSum += arr[index];
    if (map.has(prefixSum - target)) {
      return [map.get(prefixSum - target)! + 1, index];
    }

    if (!map.has(prefixSum - target)) {
      map.set(prefixSum, index);
    }
  }
  return [-1, -1];
}
