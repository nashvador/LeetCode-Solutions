/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map1 = new Set();

    for (let i=0; i<nums.length; i++) {
        if (map1.has(nums[i])) {
            return true
        }
        else {
            map1.add(nums[i])
        }
    }
    return false
};