function mergeSort(array) {
    if (array.length === 1) {
      return array;
    } else {
      halfLength = Math.floor(array.length / 2);
      const leftArray = array.slice(0, halfLength);
      const rightArray = array.slice(halfLength, array.length);
  
      const first = mergeSort(leftArray);
      const second = mergeSort(rightArray);
  
      let i = 0,
        j = 0,
        k = 0;
      var tempArray = [];
  
      while (i < first.length || j < second.length) {
        if (first[i] === undefined) {
          tempArray[k++] = second[j++];
        } else if (second[j] === undefined) {
          tempArray[k++] = first[i++];
        } else if (first[i] < second[j]) {
          tempArray[k++] = first[i++];
        } else {
          tempArray[k++] = second[j++];
        }
      }
      return tempArray;
    }
  }
  
  console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 9]));
  
  console.log(
    mergeSort([
      82, 17, 5, 32, 99, 7, 44, 25, 61, 38, 73, 49, 16, 2, 90, 57, 29, 86, 63, 41,
      3, 94, 68, 20, 48, 10, 77, 14, 81, 22, 33, 50, 89, 1, 36, 72, 95, 60, 13,
      79, 46, 9, 91, 26, 6, 55, 85, 31, 67, 100,
    ])
  );