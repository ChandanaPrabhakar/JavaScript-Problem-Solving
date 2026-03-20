// Sliding Window Maximum

export function slidingWindowMaximum(arr: number[], k: number): number[] {
  const result: number[] = [];
  const deque: number[] = [];

  for (let index = 0; index < arr.length; index++) {
    if (deque.length > 0 && deque[0] <= index - k) {
      deque.shift();
    }

    while (deque.length > 0 && arr[deque[deque.length - 1]] <= arr[index]) {
      deque.pop();
    }

    deque.push(index);

    if (index >= k - 1) {
      result.push(arr[deque[0]]);
    }
  }
  return result;
}
