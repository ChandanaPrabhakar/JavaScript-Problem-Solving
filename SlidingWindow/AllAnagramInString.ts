// Find All Anagrams in a String

export function findAllAnagram(s: string, p: string): number[] {
  const result: number[] = [];
  if (p.length > s.length) return result;

  const pFrequencyCount: number[] = new Array(26).fill(0);
  const sFrequencyCount: number[] = new Array(26).fill(0);
  const getIndex = (ch: string) => ch.charCodeAt(0) - 97;

  for (let index = 0; index < p.length; index++) {
    pFrequencyCount[getIndex(p[index])]++;
    sFrequencyCount[getIndex(s[index])]++;
  }

  const isEquals = (a: number[], b: number[]) => {
    for (let index = 0; index < 26; index++) {
      if (a[index] !== b[index]) return false;
    }
    return true;
  };

  if (isEquals(pFrequencyCount, sFrequencyCount)) result.push(0);

  for (let index = p.length; index < s.length; index++) {
    sFrequencyCount[getIndex(s[index])]++;
    sFrequencyCount[getIndex(s[index - p.length])]--;

    if (isEquals(pFrequencyCount, sFrequencyCount))
      result.push(index - p.length + 1);
  }
  return result;
}
