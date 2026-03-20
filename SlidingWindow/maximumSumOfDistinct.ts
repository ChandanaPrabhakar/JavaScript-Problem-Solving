// Maximum Sum of Distinct Subarrays With Length K

export function maximumSumOfDistinct(arr: number[], k: number): number {
  let maxSum = 0;
  let currentSum = 0;
  let windowStart = 0;

  const countMap = new Map<number, number>();

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    // Add incoming element
    currentSum += arr[windowEnd];
    countMap.set(arr[windowEnd], (countMap.get(arr[windowEnd]) || 0) + 1);

    // Shrink window if size exceeds k
    if (windowEnd >= k) {
      currentSum -= arr[windowStart];

      const count = countMap.get(arr[windowStart])!;
      if (count === 1) {
        countMap.delete(arr[windowStart]);
      } else {
        countMap.set(arr[windowStart], count - 1);
      }

      windowStart++;
    }

    // Check valid window
    if (windowEnd - windowStart + 1 === k) {
      if (countMap.size === k) {
        maxSum = Math.max(maxSum, currentSum);
      }
    }
  }

  return maxSum;
}
