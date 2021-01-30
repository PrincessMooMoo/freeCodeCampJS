function mutation(arr) {

    const firstWord = arr[0];
    const secondWord = arr[1];
    // console.log(secondWord)
  
    const lowercaseOne = firstWord.toLowerCase();
    const lowercaseTwo = secondWord.toLowerCase();
    // console.log(lowercaseTwo)
  
    // lowercaseOne = lowercaseOne.replace(/"/g, "");
  
    let count = 0;
    let bool = true;
  
    for(let i = 0; i < lowercaseOne.length; i++) {
      for(let j = 0; j < lowercaseTwo.length; j++) {
        if (lowercaseTwo[j] == lowercaseOne[i]){
          count++;
          console.log(count)
        }
      }
      }
      if (count == lowercaseTwo.length){
        return true;
      } else {
        return false;
      }
    }
  
  mutation(["Hello", "hello"]);