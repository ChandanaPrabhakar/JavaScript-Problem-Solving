// Max Value of Equation
export function maxValueOfEquation(nums: number[][], k: number): number {
  const deque: number[] = [];
  let maximumValue: number = -Infinity;

  for (let j = 0; j < nums.length; j++) {
    const [xj, yj] = nums[j];

    while (deque.length > 0 && xj - nums[deque[0]][0] > k) {
      deque.shift();
    }

    if (deque.length > 0) {
      const i = deque[0];
      const [xi, yi] = nums[i];

      maximumValue = Math.max(maximumValue, yi - xi + (yj + xj));
    }

    while (
      deque.length > 0 &&
      nums[deque[deque.length - 1]][1] - nums[deque[deque.length - 1]][0] <=
        yj - xj
    ) {
      deque.pop();
    }
    deque.push(j);
  }
  return maximumValue;
}
