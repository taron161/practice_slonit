// slice
const mySlice = (arr, start = 0, end = arr.length) => {
  if (!Array.isArray(arr)) {
    return;
  }
  const newArr = [];
  for (let i = start; i < end; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};
const arr = [4, 45, 333, 9, 45, 334];

// indexOf
const myIndexOf = (arr, item, from = 0) => {
  if (!Array.isArray(arr)) {
    return;
  }

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return i;
    }
  }
  return -1;
};

// includes
const myIncludes = (arr, item, from = 0) => {
  if (!Array.isArray(arr)) {
    return;
  }

  for (let i = from; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }

  return false;
};
