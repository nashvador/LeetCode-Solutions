function searchInsert(nums: number[], target: number): number {
  let low: number = 0;
  let high: number = nums.length - 1;

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);
    let guess: number = nums[mid];
    if (target > guess) {
      low = mid + 1;
    }

    if (target < guess) {
      high = mid - 1;
    }
    if (target === guess) {
      return mid;
    }
  }
  return low;
}
