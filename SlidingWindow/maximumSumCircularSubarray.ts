// Maximum Sum Circular Subarray (window variant)

export function maximumSumCircularSubarray(arr: number[], k: number): number {
  let totalSum: number = 0;

  let maximumSum: number = arr[0];
  let currentMaximum: number = 0;

  let minimumSum: number = arr[0];
  let currentMinimum: number = Infinity;

  for (let num of arr) {
    currentMaximum = Math.max(num, currentMaximum + num);
    maximumSum = Math.max(maximumSum, currentMaximum);

    currentMinimum = Math.min(num, currentMaximum + num);
    minimumSum = Math.min(minimumSum, currentMaximum);

    totalSum += num;
  }
  if (maximumSum < 0) return maximumSum;

  return Math.max(maximumSum, totalSum - minimumSum);
}
