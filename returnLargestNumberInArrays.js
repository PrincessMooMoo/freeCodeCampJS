function largestOfFour(arr) {
    let arrHolder = [];
    //let max = 0;
    arr.forEach(function (subarray) {
        //console.log(subarray);
        let largestNumSub = Math.max(...subarray);
        //console.log(largestNumSub);
        /*if(largestNumSub > max){
          arrHolder = subarray;
          max = largestNumSub;
          
        }*/
        arrHolder.push(largestNumSub);
    });
    console.log(arrHolder);
    return arrHolder;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
