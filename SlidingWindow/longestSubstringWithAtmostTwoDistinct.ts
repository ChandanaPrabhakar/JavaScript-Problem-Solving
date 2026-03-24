// Longest Substring with At Most Two Distinct

export function longestSubstringAtmostTwoDistinct(text: string): number {
  if (text.length === 0) return 0;

  let maximumLength = 0;
  let left = 0;

  const map = new Map<string, number>();

  for (let right = 0; right < text.length; right++) {
    const char = text[right];

    map.set(char, (map.get(char) || 0) + 1);

    while (map.size > 2 && left <= right) {
      const leftChar = text[left];
      map.set(leftChar, map.get(leftChar)! - 1);

      if (map.get(leftChar) === 0) {
        map.delete(leftChar);
      }
      left++;
    }
    maximumLength = Math.max(maximumLength, right - left + 1);
  }
  return maximumLength;
}
