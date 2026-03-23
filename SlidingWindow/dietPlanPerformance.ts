// Diet Plan Performance

export function dietPlan(
  arr: number[],
  k: number,
  lower: number,
  upper: number,
): number {
  let score: number = 0;
  let sum: number = 0;
  let start: number = 0;

  for (let end = 0; end < arr.length; end++) {
    sum += arr[end];

    if (end - start + 1 === k) {
      if (sum < lower) {
        score -= 1;
      } else if (sum > upper) {
        score += 1;
      }

      sum -= arr[start];
      start++;
    }
  }
  return score;
}
