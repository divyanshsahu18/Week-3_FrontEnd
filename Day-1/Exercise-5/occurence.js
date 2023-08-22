function countOccurrences(arr) {
    const result = {};
    
    for (let i = 0; i < arr.length; i++) {
      if (result[arr[i]] === undefined) {
        result[arr[i]] = 1;
      } else {
        result[arr[i]]++;
      }
    }
    
    return result;
  }
  