// Minimum Swaps to Make Binary String Alternating
export function minimumSwapsMakeBinaryStringAlternating(text: string): number {
  let zeros: number = 0;
  let ones: number = 0;

  for (let ch of text) {
    if (ch === "0") zeros++;
    else ones++;
  }

  const countSwaps = (startChar: string): number => {
    let mismatches: number = 0;

    for (let index = 0; index < text.length; index++) {
      const expected =
        index % 2 === 0 ? startChar : startChar === "0" ? "1" : "0";
      if (text[index] !== expected) mismatches++;
    }
    return Math.floor(mismatches / 2);
  };

  if (Math.abs(zeros - ones) > 1) return -1;
  if (zeros > ones) {
    return countSwaps("0");
  } else if (ones > zeros) {
    return countSwaps("1");
  } else {
    return Math.min(countSwaps("0"), countSwaps("1"));
  }
}
