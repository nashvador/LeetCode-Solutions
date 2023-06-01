/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) {
    return false;
  }
  let value1 = -1;
  let booleanflag = true;
  let decreaseflag = false;
  for (let i = 0; i < arr.length; i++) {
    if (value1 < arr[i]) {
      value1 = arr[i];
    } else {
      if (i === 1) break;
      decreaseflag = true;
    }
    if (decreaseflag) {
      if (value1 <= arr[i]) {
        booleanflag = false;
        break;
      } else {
        value1 = arr[i];
      }
    }
  }
  return booleanflag && decreaseflag;
};
