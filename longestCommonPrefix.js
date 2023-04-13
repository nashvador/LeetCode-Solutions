/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let i = 0;
    while (i < strs[0].length) {
        let boolean = true;
        for (let j=0; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) {
                boolean = false
                break
            }
        }
        if (!boolean) {
            break
        }
       i++
    }
    
    return strs[0].substring(0,i)

};