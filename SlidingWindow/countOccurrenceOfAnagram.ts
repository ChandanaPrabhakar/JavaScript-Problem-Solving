// Count Occurrences of Anagrams

export function countOccurrenceAnagram(text: string, pattern: string): number {
  if (pattern.length > text.length) return 0;
  let count = 0;
  const textFrequencyCount: number[] = new Array(26).fill(0);
  const patternFrequencyCount: number[] = new Array(26).fill(0);
  const getIndex = (ch: string) => ch.charCodeAt(0) - 97;
  const isEqual = (a: number[], b: number[]) => {
    for (let index = 0; index < 26; index++) {
      if (a[index] !== b[index]) {
        return false;
      }
    }
    return true;
  };

  for (let index = 0; index < pattern.length; index++) {
    patternFrequencyCount[getIndex(pattern[index])]++;
    textFrequencyCount[getIndex(text[index])]++;
  }

  if (isEqual(textFrequencyCount, patternFrequencyCount)) count++;

  for (let index = pattern.length; index < text.length; index++) {
    textFrequencyCount[getIndex(text[index])]++;
    textFrequencyCount[getIndex(text[index - pattern.length])]--;

    if (isEqual(textFrequencyCount, patternFrequencyCount)) count++;
  }

  return count;
}
