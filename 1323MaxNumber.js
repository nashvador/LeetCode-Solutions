/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  let stringNum = num.toString().split("");
  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] === "6") {
      stringNum[i] = "9";
      break;
    }
  }
  return parseInt(stringNum.join(""));
};
