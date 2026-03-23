// Defuse the Bomb

export function defuseBomb(arr: number[], k: number): number[] {
  const n = arr.length;
  const result: number[] = new Array(n).fill(0);
  if (k === 0) return result;
  let sum: number = 0;
  let start: number = 0;
  let end: number = 0;

  if (k > 0) {
    start = 1;
    end = k;
  } else {
    start = n + k;
    end = n - 1;
  }

  for (let index = start; index <= end; index++) {
    sum += arr[index % n];
  }

  for (let index = 0; index < n; index++) {
    result[index] = sum;
    sum -= arr[start % n];
    start++;
    end++;

    sum += arr[end % n];
  }
  return result;
}
