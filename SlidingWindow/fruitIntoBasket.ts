// Fruit Into Baskets
export function fruitIntoBasket(arr: number[]): number {
  let maximumLength: number = 0;
  let start: number = 0;

  const map = new Map<number, number>();

  for (let end = 0; end < arr.length; end++) {
    map.set(arr[end], (map.get(arr[end]) || 0) + 1);

    while (map.size > 2) {
      map.set(arr[start], map.get(arr[start])! - 1);

      if (map.get(arr[start]) === 0) {
        map.delete(arr[start]);
      }
      start++;
    }
    maximumLength = Math.max(maximumLength, end - start + 1);
  }
  return maximumLength;
}
