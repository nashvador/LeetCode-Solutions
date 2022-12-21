/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map1 = new Map()
 
    for (let i = 0; i < s.length; i++ ) {
        if (!map1.has(s[i])) {    
            map1.set(s[i], 1)
        } else {
            let valueOther = map1.get(s[i]) + 1
            map1.set(s[i], valueOther)}
    }
    
    for (let k = 0; k < s.length; k++) {
        if (map1.get(s[k]) === 1 ) return k
    }

    return -1

    console.log(map1)
};