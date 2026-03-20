// K Radius Subarray Averages

export function KRadiusSubarrayAverage(arr: number[], k: number): number[] {
  const result: number[] = new Array(arr.length).fill(-1);
  const windowSize = 2 * k + 1;
  if (windowSize > arr.length) return result;

  let sum = 0;
  let start = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    if (end >= windowSize - 1) {
      const center = end - k;
      result[center] = Math.floor(sum / windowSize);
      sum -= arr[start];
      start++;
    }
  }

  return result;
}
