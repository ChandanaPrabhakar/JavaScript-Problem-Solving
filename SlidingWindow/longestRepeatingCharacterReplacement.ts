// Longest Repeating Character Replacement
export function longestRepeatingReplacement(text: string, k: number): number {
  let maximumLength: number = 0;
  let maximumFreq: number = 0;
  let start: number = 0;
  const map = new Map<string, number>();

  for (let end = 0; end < text.length; end++) {
    const char = text[end];

    map.set(char, (map.get(char) || 0) + 1);
    maximumFreq = Math.max(maximumFreq, map.get(char)!);

    while (end - start + 1 - maximumFreq > k) {
      const leftChar: string = text[start];
      map.set(leftChar, map.get(leftChar)! - 1);
      start++;
    }
    maximumLength = Math.max(maximumLength, end - start + 1);
  }
  return maximumLength;
}
