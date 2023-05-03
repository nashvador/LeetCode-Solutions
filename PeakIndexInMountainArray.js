/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let begin = 0;
  let end = arr.length - 1;
  while (begin <= end) {
    middle = Math.floor((begin + end) / 2);

    let lower = middle === 0 ? -1 : arr[middle - 1];
    let upper =
      middle === arr.length - 1 ? Math.pow(10, 6) + 1 : arr[middle + 1];
    let middleArray = arr[middle];

    if (lower < middleArray && upper > middleArray) {
      begin = middle + 1;
    } else if (lower > middleArray && upper < middleArray) {
      end = middle - 1;
    } else if (lower < middleArray && middleArray > upper) return middle;
  }
};
