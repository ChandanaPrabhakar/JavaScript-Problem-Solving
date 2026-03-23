// Minimum Difference Between Highest and Lowest of K Scores

export function minimumDifference(arr: number[], k: number): number {
  if (k <= 1) return 0;
  arr.sort((a, b) => a - b);

  let minimumDiff: number = Infinity;

  for (let index = 0; index <= arr.length - k; index++) {
    const difference = arr[index + k - 1] - arr[index];
    minimumDiff = Math.min(minimumDiff, difference);
  }
  return minimumDiff;
}
