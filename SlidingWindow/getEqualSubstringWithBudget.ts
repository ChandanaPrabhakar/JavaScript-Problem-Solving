// Get Equal Substrings Within Budget

export function getEqualSubstring(
  text1: string,
  text2: string,
  maximumCost: number,
): number {
  let maximumLength: number = 0;
  let start: number = 0;
  let currentCost: number = 0;

  for (let end = 0; end < text2.length; end++) {
    const cost = Math.abs(text1.charCodeAt(end) - text2.charCodeAt(end));

    currentCost += cost;

    while (currentCost > maximumCost) {
      const leftCost = Math.abs(
        text1.charCodeAt(start) - text2.charCodeAt(start),
      );
      currentCost -= leftCost;
      start++;
    }

    maximumLength = Math.max(maximumLength, end - start + 1);
  }
  return maximumLength;
}
