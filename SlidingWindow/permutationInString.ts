// Permutation in String

export function stringPermutation(text1: string, text2: string): boolean {
  if (text1.length > text2.length) return false;

  const text1FreqCount: number[] = new Array(26).fill(0);
  const text2FreqCount: number[] = new Array(26).fill(0);
  const getIndex = (ch: string) => ch.charCodeAt(0) - 97;
  let start: number = 0;

  for (let index = 0; index < text1.length; index++) {
    text1FreqCount[getIndex(text1[index])]++;
    text2FreqCount[getIndex(text2[index])]++;
  }

  let match: number = 0;

  for (let i = 0; i < 26; i++) {
    if (text1FreqCount[i] === text2FreqCount[i]) {
      match++;
    }
  }

  for (let end = text1.length; end < text2.length; end++) {
    if (match === 26) return true;

    const indexIn: number = getIndex(text2[end]);
    const indexOut: number = getIndex(text2[start]);

    text2FreqCount[indexIn]++;
    if (text2FreqCount[indexIn] === text1FreqCount[indexIn]) {
      match++;
    } else if (text2FreqCount[indexIn] === text1FreqCount[indexIn] + 1) {
      match--;
    }

    text2FreqCount[indexOut]--;
    if (text2FreqCount[indexOut] === text1FreqCount[indexOut]) {
      match++;
    } else if (text2FreqCount[indexOut] === text1FreqCount[indexOut] - 1) {
      match--;
    }
    start++;
  }
  return match === 26;
}
