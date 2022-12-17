/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map1 = new Map()
    nums.forEach( a => {
        let value = 1; 
        map1.has(a) ? value = map1.get(a) + 1 : value;
        map1.set(a, value);
    })
    console.log(map1)
    let returnStuff = 0
    let keyStuff = 0
    map1.forEach((value, key) => {
        if (value > returnStuff) {returnStuff = value; keyStuff = key;}
    })
    return keyStuff;
}