/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let boolean = false;
  if (num === 1) return true;
  let low = 0;
  let high = num;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (mid * mid > num) {
      high = mid - 1;
      continue;
    }

    if (mid * mid < num) {
      low = mid + 1;
      continue;
    }

    if (mid * mid === num) {
      boolean = true;
      break;
    }
  }
  return boolean;
};
