/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let firstIndece = 0;
  let firstIndeceValue = 0;
  let secondIndece = 0;
  let secondIndeceValue = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= firstIndeceValue && nums[i] >= secondIndeceValue) {
      secondIndece = firstIndece;
      secondIndeceValue = firstIndeceValue;
      firstIndece = i;
      firstIndeceValue = nums[i];
    } else if (nums[i] <= firstIndeceValue && nums[i] >= secondIndeceValue) {
      secondIndece = i;
      secondIndeceValue = nums[i];
    }
  }

  return (nums[firstIndece] - 1) * (nums[secondIndece] - 1);
};
