// Longest Substring with At Most K Distinct Characters

export function longestSubstringAtmost(text: string, k: number): number {
  if (k === 0) return 0;
  let start: number = 0;
  let maximumLength: number = 0;

  const map = new Map<string, number>();

  for (let end = 0; end < text.length; end++) {
    const char: string = text[end];
    map.set(char, (map.get(char) || 0) + 1);

    while (map.size > k) {
      const leftChar: string = text[start];
      map.set(leftChar, map.get(leftChar)! - 1);

      if (map.get(leftChar) === 0) {
        map.delete(leftChar);
      }
      start++;
    }
    maximumLength = Math.max(maximumLength, end - start + 1);
  }
  return maximumLength;
}
