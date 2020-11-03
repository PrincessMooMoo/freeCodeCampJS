function findLongestWordLength(str) {
    let longestWord = "";
    let strArray = str.split(" ");
   /* for(let i=0; i<strArray.length; i++){
      console.log(strArray[i]);
      //console.log(longestWord);
      if(longestWord.length <= strArray[i].length){
        longestWord = strArray[i];
      }
    }*/
    strArray.forEach(function (word) {
       if(longestWord.length <= word.length){
        longestWord = word;
      }
      console.log(word);
  });
    return longestWord.length;
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));