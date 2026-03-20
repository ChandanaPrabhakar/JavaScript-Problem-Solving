// Average of Subarray of Size K

export function averageOfSubarray(arr: number[], k: number): number[] {
  if (k > arr.length) return [];
  const result: number[] = [];
  let start: number = 0;
  let sum: number = 0;

  for (let end: number = 0; end < arr.length; end++) {
    sum += arr[end];
    if (end - start + 1 === k) {
      let average = sum / k;
      result.push(average);
      sum -= arr[start];
      start++;
    }
  }
  return result;
}
