function bouncer(arr) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {

    if(arr[i]) newArr.push(arr[i]);
  }
  return newArr;
}

bouncer([false, null, 0, NaN, undefined, ""]);

 //another way using .filter()

//  function bouncer(arr) {
//    return arr.filter(Boolean);
//  }