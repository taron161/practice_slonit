function myFilter(array, callback) {
  const filteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      filteredArray.push(array[i]);
    }
  };

  return filteredArray;
}
