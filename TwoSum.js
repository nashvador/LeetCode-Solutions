/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const arraySet = new Map();
    for (let j = 0; j < nums.length; j++) {
        // for (let i = j + 1; i < nums.length; i++) {
        //     if (nums[j] + nums[i] === target) {
        //         return [j, i]
        //     }
        // }   
        const val = target - nums[j];
        if (arraySet.has(val)) {
            return [j, arraySet.get(val)]
        }
        arraySet.set(nums[j], j);
    }
};