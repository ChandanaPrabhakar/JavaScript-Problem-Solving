// Maximum Robots Within Budget
export function maximumRobotsWithinBudget(
  chargeTime: number[],
  runningTime: number[],
  budget: number,
): number {
  let start: number = 0;
  let maximumLength: number = 0;
  let runningSum: number = 0;

  const deque: number[] = [];

  for (let end: number = 0; end < chargeTime.length; end++) {
    while (
      deque.length > 0 &&
      chargeTime[deque[deque.length - 1]] <= chargeTime[end]
    ) {
      deque.pop();
    }

    deque.push(end);
    runningSum += runningTime[end];

    while (
      deque.length > 0 &&
      chargeTime[deque[0]] + (end - start + 1) * runningSum > budget
    ) {
      if (deque[0] === start) deque.shift();
      runningSum -= runningTime[start];
      start++;
    }
    maximumLength = Math.max(maximumLength, end - start + 1);
  }
  return maximumLength;
}
