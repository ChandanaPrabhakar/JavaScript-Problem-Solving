// First Negative Number in Every Window

export function firstNegativeNumber(arr: number[], k: number): number[] {
  if (k > arr.length) return [];

  const result: number[] = [];
  const queue: number[] = [];
  let left = 0;

  for (let right = 0; right < arr.length; right++) {
    if (arr[right] < 0) {
      queue.push(right);
    }

    if (right - left + 1 === k) {
      // Get first negative
      if (queue.length > 0) {
        result.push(arr[queue[0]]);
      } else {
        result.push(0);
      }

      // Remove if out of window
      if (queue.length > 0 && queue[0] === left) {
        queue.shift();
      }

      left++;
    }
  }

  return result;
}
