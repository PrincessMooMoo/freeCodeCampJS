function titleCase(str) {
  let lowerCase = str.toLowerCase();
  // console.log(lowerCase)
  let wordArr = lowerCase.split(" ");
  for (let i = 0; i < wordArr.length; i++){
    for (let j = 0; j < wordArr.length; j++){
      j = j.toUpperCase;//work on this line later
    }
  }
  // wordArr.forEach(word => 
  //   word.forEach(letter => letter[0].toUpperCase));
  // wordArr.replace()
  // console.log(wordArr)
  // let firstLetterArr = wordArr.map(i => i);
  // console.log(firstLetterArr);
  
  return str;
}

titleCase("I'm a little tea pot");
