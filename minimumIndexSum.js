var findRestaurant = function (list1, list2) {
  const listOneHashMap = new Map();
  const listTwoHashMap = new Map();
  let smallest = Number.MAX_SAFE_INTEGER;
  let smallestkey = [];

  for (let i = 0; i < list1.length; i++) {
    listOneHashMap.set(list1[i], i);
  }
  for (let j = 0; j < list2.length; j++) {
    listTwoHashMap.set(list2[j], j);
    if (listOneHashMap.has(list2[j])) {
      if (listOneHashMap.get(list2[j]) + j < smallest) {
        smallest = listOneHashMap.get(list2[j]) + j;
        smallestkey = [list2[j]];
      } else if (listOneHashMap.get(list2[j]) + j === smallest) {
        smallestkey.push(list2[j]);
      }
    }
  }

  return smallestkey;
};
