import { findAllAnagram } from "./AllAnagramInString.ts";
import { averageOfSubarray } from "./averageSubarraySum.ts";
import { maximumNumberOfVowels } from "./maximumNumberOfVowels.ts";
import { maximumSubarraySum } from "./MaximumSubarraySum.ts";
import { slidingWindowMaximum } from "./slidingWindowMaximum.ts";
import {
  subarrayWithGivenSum,
  subarrayWithGivenSumNonNegative,
} from "./subarrayGivenSum.ts";
import { firstNegativeNumber } from "./firstNegativeNumberInEveryWindow.ts";
import { countOccurrenceAnagram } from "./countOccurrenceOfAnagram.ts";
import { maximumSumOfDistinct } from "./maximumSumOfDistinct.ts";
import { KRadiusSubarrayAverage } from "./KRadiusSubarrayAverage.ts";
import { averageGreaterEqualThreshold } from "./AverageGEThreshold.ts";
import { maximumPointsObtainedCards } from "./MaximumPoints.ts";
import { defuseBomb } from "./defuseTheBomb.ts";
import { grumpyOwner } from "./grumpyBookstoreOwner.ts";
import { dietPlan } from "./dietPlanPerformance.ts";
import { minimumDifference } from "./minimumDifferenceHighestLowest.ts";
import { countSubarrayScore } from "./countSubarrayWithScoreLK.ts";
import { maximumSumCircularSubarray } from "./maximumSumCircularSubarray.ts";
import { getEqualSubstring } from "./getEqualSubstringWithBudget.ts";
import { minimumSwaps } from "./minimumSwapsToGroupAll1s.ts";
import { longestSubstring } from "./longestSubstringWithoutRepeating.ts";
import { longestRepeatingReplacement } from "./longestRepeatingCharacterReplacement.ts";
import { minimumWindowSubstring } from "./minimumWindowSubstring.ts";
import { stringPermutation } from "./permutationInString.ts";
import { longestSubstringAtmost } from "./longestSunstringAtmostKDistinct.ts";
import { longestSubstringAtmostTwoDistinct } from "./longestSubstringWithAtmostTwoDistinct.ts";
import { fruitIntoBasket } from "./fruitIntoBasket.ts";
import { subarrayDistinctInteger } from "./subarrayWithKDistinctInteger.ts";
import { numberSubstringsContainingAllThreeCharacters } from "./numberOfSubstringsContainingAllThreeCharacters.ts";
import { countNumberofNiceSubarray } from "./countNumberOfNiceSubarray.ts";
import {
  binarySubarrayWithSum,
  binarySubarrayWithSumPrefixHash,
} from "./binarySubarrayWithSum.ts";
import { subarrayProduct } from "./subarrayProductLessThanK.ts";
import { minimumSubarraySum } from "./minimumSizeSubarraySum.ts";
import { longestContinuousSubarray } from "./longestContinuousSubarrayWithAbsoluteDiffLELimit.ts";
import { maximumEraseValue } from "./maximumEraseValue.ts";

console.log(
  "Maximum subarray sum of size K: ",
  maximumSubarraySum([2, 1, 5, 1, 3, 2], 3),
);
console.log(
  "Average of subarray of size K:",
  averageOfSubarray([1, 3, 2, 6, -1, 4, 1, 8, 2], 5),
);

console.log(
  "Find all anagram in a string:",
  findAllAnagram("cbaebabacd", "abc"),
);

console.log(
  "Sliding Window Maximum: ",
  slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3),
);

console.log(
  "Maximum Number of Vowels in Substring: ",
  maximumNumberOfVowels("abciiidef", 3),
);

console.log(
  "Subarray with Given Sum",
  subarrayWithGivenSum([15, 2, 4, 8, 9, 5, 10, 23], 23),
);

console.log(
  "Subarray with Given Sum -> Non Negative",
  subarrayWithGivenSumNonNegative([15, 2, 4, 8, 9, 5, 10, 23], 23),
);

console.log(
  "First Negative Number in Every Window",
  firstNegativeNumber([12, -1, -7, 8, -15, 30, 16, 28], 3),
);

console.log(
  "Count Occurrences of Anagrams",
  countOccurrenceAnagram("forxxorfxdofr", "for"),
);

console.log(
  "Maximum Sum of Distinct Subarray With Length K: ",
  maximumSumOfDistinct([1, 5, 4, 2, 9, 9, 9], 3),
);

console.log(
  "K Radius Subarray Averages: ",
  KRadiusSubarrayAverage([7, 4, 3, 9, 1, 8, 5, 2, 6], 3),
);

console.log(
  "Number of Subarray of Size K with Average ≥ Threshold: ",
  averageGreaterEqualThreshold([2, 2, 2, 2, 5, 5, 5, 8], 3, 4),
);

console.log(
  "Maximum Points You Can Obtain from Cards: ",
  maximumPointsObtainedCards([1, 2, 3, 4, 5, 6, 1], 3),
);

console.log("Defuse the Bomb: ", defuseBomb([5, 7, 1, 4], 3));

console.log(
  "Grumpy Bookstore Owner: ",
  grumpyOwner([1, 0, 1, 2, 1, 1, 7, 5], [0, 1, 0, 1, 0, 1, 0, 1], 3),
);

console.log("Diet Plan Performance: ", dietPlan([1, 2, 3, 4, 5], 1, 3, 3));

console.log(
  "Minimum Difference Between Highest and Lowest of K Scores: ",
  minimumDifference([9, 4, 1, 7], 2),
);

console.log(
  "Count Subarray With Score < K: ",
  countSubarrayScore([2, 1, 4, 3, 5], 10),
);

console.log(
  "Maximum Sum Circular Subarray (window variant): ",
  maximumSumCircularSubarray([1, -2, 3, -2], 3),
);

console.log(
  "Get Equal Substrings Within Budget: ",
  getEqualSubstring("abcd", "bcdf", 3),
);

console.log(
  "Minimum Swaps to Group All 1's Together: ",
  minimumSwaps([1, 0, 1, 0, 1]),
);

console.log(
  "Longest Substring Without Repeating Characters: ",
  longestSubstring("abcabcbb"),
);

console.log(
  "Longest Repeating Character Replacement: ",
  longestRepeatingReplacement("AABABBA", 1),
);

console.log(
  "Minimum Window Substring: ",
  minimumWindowSubstring("ADOBECODEBANC", "ABC"),
);

console.log("Permutation in String: ", stringPermutation("ab", "eidbaooo"));

console.log(
  "Longest Substring with At Most K Distinct Characters: ",
  longestSubstringAtmost("ecebaaa", 2),
);

console.log(
  "Longest Substring with At Most Two Distinct: ",
  longestSubstringAtmostTwoDistinct("mississippi"),
);

console.log("Fruit Into Baskets: ", fruitIntoBasket([1, 2, 3, 2, 2]));

console.log(
  "Subarray with K Distinct Integers: ",
  subarrayDistinctInteger([1, 2, 1, 2, 3], 2),
);

console.log(
  "Number of Substrings Containing All Three Characters: ",
  numberSubstringsContainingAllThreeCharacters("abcabc"),
);

console.log(
  "Count Number of Nice Subarray: ",
  countNumberofNiceSubarray([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2),
);

console.log(
  "Binary Subarray With Sum (Sliding Window): ",
  binarySubarrayWithSum([0, 0, 0, 0, 0], 0),
);

console.log(
  "Binary Subarray With Sum (prefix + HashMap): ",
  binarySubarrayWithSumPrefixHash([0, 0, 0, 0, 0], 0),
);

console.log(
  "Subarray Product Less Than K: ",
  subarrayProduct([10, 5, 2, 6], 100),
);

console.log(
  "Minimum Size Subarray Sum: ",
  minimumSubarraySum([2, 3, 1, 2, 4, 3], 7),
);

console.log(
  "Longest Continuous Subarray With Absolute Diff ≤ Limit: ",
  longestContinuousSubarray([10, 1, 2, 4, 7, 2], 5),
);

console.log("Maximum Erasure Value: ", maximumEraseValue([4, 2, 4, 5, 6]));
