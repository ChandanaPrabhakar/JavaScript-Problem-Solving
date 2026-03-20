// Maximum Number of Vowels in Substring

export function maximumNumberOfVowels(s: string, k: number): number {
  if (k > s.length) return 0;
  let maxVowels = 0;
  let currentVowelCount = 0;
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  for (let index = 0; index < k; index++) {
    if (vowels.has(s[index])) currentVowelCount++;
  }

  maxVowels = currentVowelCount;

  for (let index = k; index < s.length; index++) {
    if (vowels.has(s[index])) currentVowelCount++;
    if (vowels.has(s[index - k])) currentVowelCount--;

    maxVowels = Math.max(maxVowels, currentVowelCount);
  }
  return maxVowels;
}
