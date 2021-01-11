function getIndexToIns(arr, num) {
  const newArray = arr.slice();
  newArray.sort(function(a, b){return a-b})
  console.log(newArray)
  const indexZero = 0;
  if(newArray && newArray.length > 0) {
    
    for(let i = 0; i < newArray.length; i++){
      if (num <= newArray[i]) {
        return (i);
      }
      if (num > newArray[newArray.length-1]){
        return newArray.length;
      }
    }

  } else {
    return indexZero;
  }
}

console.log(getIndexToIns([2, 5, 10], 15))

// example from freecodecamp

// function getIndexToIns(arr, num) {
//   arr.sort(function(a, b) {
//     return a - b;
//   });

//   for (var a = 0; a < arr.length; a++) {
//     if (arr[a] >= num) return a;
//   }

//   return arr.length;
// }