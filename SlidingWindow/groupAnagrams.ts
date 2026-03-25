// Group Anagrams (window variant)

export function groupAnagrams(arr: string[]): string[][] {
  const map = new Map<string, string[]>();

  for (let word of arr) {
    const frequency: number[] = new Array(26).fill(0);

    for (let char of word) {
      frequency[char.charCodeAt(0) - 97]++;
    }

    let key: string = frequency.join("#");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)!.push(word);
  }

  return Array.from(map.values());
}
