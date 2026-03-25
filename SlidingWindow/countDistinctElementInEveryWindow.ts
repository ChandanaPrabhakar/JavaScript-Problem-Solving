// Count Distinct Elements in Every Window
export function countDistinctElementInEveryWindow(
  arr: number[],
  k: number,
): number[] {
  const result: number[] = [];
  const map = new Map<number, number>();
  let start: number = 0;

  for (let end = 0; end < arr.length; end++) {
    const num: number = arr[end];

    map.set(num, (map.get(num) || 0) + 1);
    while (end - start + 1 === k) {
      result.push(map.size);
      const leftNumber: number = arr[start];
      map.set(leftNumber, map.get(leftNumber)! - 1);

      if (map.get(leftNumber) === 0) {
        map.delete(leftNumber);
      }
      start++;
    }
  }
  return result;
}
