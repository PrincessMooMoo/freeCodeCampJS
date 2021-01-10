function getIndexToIns(arr, num) {
    const newArray = arr.slice();
    newArray.sort(function(a, b){return a-b})
    //console.log(newArray)
    return num;
  }
  
  getIndexToIns([3, 10, 5], 3)