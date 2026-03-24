// Subarray Product Less Than K
export function subarrayProduct(arr: number[], k: number): number {
  let count: number = 0;
  let product: number = 1;
  let start: number = 0;

  for (let end: number = 0; end < arr.length; end++) {
    product *= arr[end];

    while (product >= k) {
      product /= arr[start];
      start++;
    }
    count += end - start + 1;
  }
  return count;
}
