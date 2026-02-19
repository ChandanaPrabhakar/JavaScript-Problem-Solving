const twoSum = (arr, target) => {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let compliment = target - arr[i];
    if (map.has(compliment)) return [map.get(compliment), i];
    map.set(arr[i], i);
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15, 3, 6], 9));
