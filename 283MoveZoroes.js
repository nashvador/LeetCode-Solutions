/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0
    while (i < nums.length) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0)
        } else {
            i++
        }
        let boolean = true
        for (let j = i; j < nums.length; j++) {     
            if (nums[j] !== 0) {
                boolean = false    
            } 
        }
        if (boolean) {
            break
        } 
    }
    return nums
};