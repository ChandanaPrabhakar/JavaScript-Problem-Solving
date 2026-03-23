// Grumpy Bookstore Owner

export function grumpyOwner(
  customers: number[],
  grumpy: number[],
  k: number,
): number {
  let base: number = 0;
  for (let index = 0; index < customers.length; index++) {
    if (grumpy[index] === 1) {
      base += customers[index];
    }
  }

  let extra: number = 0;
  let maxExtra: number = 0;

  for (let index = 0; index < customers.length; index++) {
    if (grumpy[index] === 0) {
      extra += customers[index];
    }

    if (index >= k) {
      if (grumpy[index - k] === 1) {
        extra -= customers[index - k];
      }
    }

    maxExtra = Math.max(maxExtra, extra);
  }

  return base + maxExtra;
}
