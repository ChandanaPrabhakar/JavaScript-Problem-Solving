// Replace the Substring for Balanced String
export function replaceSubstringForBalancedString(text: string): number {
  const n: number = text.length;
  const target: number = n / 4;

  const count = new Map<string, number>();

  count.set("Q", 0);
  count.set("W", 0);
  count.set("E", 0);
  count.set("R", 0);

  for (let ch of text) {
    count.set(ch, (count.get(ch) || 0) + 1);
  }

  if (
    count.get("Q")! <= target &&
    count.get("W")! <= target &&
    count.get("E")! <= target &&
    count.get("R")! <= target
  ) {
    return 0;
  }

  let start: number = 0;
  let minimumLength: number = n;

  for (let end = 0; end < n; end++) {
    const char: string = text[end];
    count.set(char, count.get(char)! - 1);

    while (
      count.get("Q")! <= target &&
      count.get("W")! <= target &&
      count.get("E")! <= target &&
      count.get("R")! <= target
    ) {
      minimumLength = Math.min(minimumLength, end - start + 1);

      const leftChar: string = text[start];
      count.set(leftChar, count.get(leftChar)! + 1);
      start++;
    }
  }

  return minimumLength;
}
