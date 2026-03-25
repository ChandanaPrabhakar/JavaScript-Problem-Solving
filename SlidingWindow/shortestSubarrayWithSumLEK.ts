// Shortest Subarray with Sum ≥ K
export function shortestSubarrayWithSumAtleastK(
  arr: number[],
  k: number,
): number {
  const prefixSum: number[] = new Array(arr.length + 1).fill(0);
  for (let index = 0; index < arr.length; index++) {
    prefixSum[index + 1] = prefixSum[index] + arr[index];
  }

  const deque: number[] = [];
  let minimumLength: number = Infinity;

  for (let index = 0; index <= arr.length; index++) {
    while (deque.length > 0 && prefixSum[index] - prefixSum[deque[0]] >= k) {
      minimumLength = Math.min(minimumLength, index - deque[0]);
      deque.shift();
    }
    while (
      deque.length > 0 &&
      prefixSum[deque[deque.length - 1]] >= prefixSum[index]
    ) {
      deque.pop();
    }

    deque.push(index);
  }
  return minimumLength === Infinity ? -1 : minimumLength;
}
