// Minimum Window Substring

export function minimumWindowSubstring(text1: string, text2: string): string {
  if (text2.length > text1.length) return "";
  const need = new Map<string, number>();
  const window = new Map<string, number>();

  for (let ch of text2) {
    need.set(ch, (need.get(ch) || 0) + 1);
  }

  let start: number = 0;
  let have: number = 0;
  const required: number = need.size;
  let minimumLength: number = Infinity;
  let resultStart: number = 0;

  for (let end = 0; end < text1.length; end++) {
    const char: string = text1[end];
    window.set(char, (window.get(char) || 0) + 1);

    if (need.has(char) && need.get(char) === window.get(char)) {
      have++;
    }

    while (have === required) {
      if (end - start + 1 < minimumLength) {
        minimumLength = end - start + 1;
        resultStart = start;
      }
      const leftChar = text1[start];
      window.set(leftChar, window.get(leftChar)! - 1);

      if (need.has(leftChar) && window.get(leftChar)! < need.get(leftChar)!) {
        have--;
      }
      start++;
    }
  }

  return minimumLength === Infinity
    ? ""
    : text1.substring(resultStart, resultStart + minimumLength);
}
