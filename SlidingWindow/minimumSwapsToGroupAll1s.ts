//  Minimum Swaps to Group All 1's Together

export function minimumSwaps(arr: number[]): number {
  const totalOnes: number = arr.reduce((sum, num) => sum + num, 0);
  if (totalOnes <= 1) return 0;
  let maximumOnes: number = 0;
  let currentOnes: number = 0;
  let start: number = 0;

  for (let end = 0; end < arr.length; end++) {
    currentOnes += arr[end];

    if (end - start + 1 > totalOnes) {
      currentOnes -= arr[start];
      start++;
    }

    if (end - start + 1 === totalOnes) {
      maximumOnes = Math.max(maximumOnes, currentOnes);
    }
  }
  return totalOnes - maximumOnes;
}
