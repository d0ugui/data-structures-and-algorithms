function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length
  let steps = 0;
  let mid = 0;

  while (l < r) {
    steps += 1;
    mid = Math.floor((l + r) / 2)

    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      r = mid
    }
  }

  return -1;
};
