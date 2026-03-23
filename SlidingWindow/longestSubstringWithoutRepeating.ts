// Longest Substring Without Repeating Characters
export function longestSubstring(text: string): number {
  let maximumLength: number = 0;
  let start: number = 0;
  const map = new Map<string, number>();

  for (let end = 0; end < text.length; end++) {
    const char: string = text[end];
    if (map.has(char)) {
      start = Math.max(start, map.get(char)! + 1);
    }

    map.set(char, end);
    maximumLength = Math.max(maximumLength, end - start + 1);
  }
  return maximumLength;
}
