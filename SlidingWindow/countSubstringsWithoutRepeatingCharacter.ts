// Count Substrings Without Repeating Characters

export function countSubstringsWithoutRepeatingChar(text: string): number {
  let start: number = 0;
  let count: number = 0;

  const set = new Set<string>();

  for (let end = 0; end < text.length; end++) {
    const char: string = text[end];

    while (set.has(char)) {
      set.delete(text[start]);
      start++;
    }
    set.add(char);
    count += end - start + 1;
  }
  return count;
}
