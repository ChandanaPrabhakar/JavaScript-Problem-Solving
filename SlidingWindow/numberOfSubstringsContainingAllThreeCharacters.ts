// Number of Substrings Containing All Three Characters

export function numberSubstringsContainingAllThreeCharacters(
  text: string,
): number {
  let count: number = 0;
  let start: number = 0;

  const textFreqMap = new Map<string, number>();

  for (let end: number = 0; end < text.length; end++) {
    const char: string = text[end];
    textFreqMap.set(char, (textFreqMap.get(char) || 0) + 1);

    while (
      textFreqMap.get("a") &&
      textFreqMap.get("b") &&
      textFreqMap.get("c")
    ) {
      count += text.length - end;

      const leftChar: string = text[start];
      textFreqMap.set(leftChar, textFreqMap.get(leftChar)! - 1);

      if (textFreqMap.get(leftChar) === 0) {
        textFreqMap.delete(leftChar);
      }
      start++;
    }
  }
  return count;
}
