// Maximum Points You Can Obtain from Cards

export function maximumPointsObtainedCards(arr: number[], k: number): number {
  const n = arr.length;

  if (k >= n) {
    return arr.reduce((sum, num) => sum + num, 0);
  }

  const totalSum = arr.reduce((sum, num) => sum + num, 0);

  const windowSize = n - k;
  let currentSum = 0;
  let minSum = Infinity;

  let start = 0;

  for (let end = 0; end < n; end++) {
    currentSum += arr[end];

    if (end - start + 1 === windowSize) {
      minSum = Math.min(minSum, currentSum);

      currentSum -= arr[start];
      start++;
    }
  }

  return totalSum - minSum;
}
