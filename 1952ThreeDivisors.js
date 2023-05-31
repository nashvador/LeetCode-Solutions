var isThree = function (n) {
  let value = 1;
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      value++;
    }
    if (value > 3) {
      return false;
    }
  }
  return value === 3;
};
