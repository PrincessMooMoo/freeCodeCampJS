function titleCase(str) {
  let lowerCase = str.toLowerCase();
  console.log(lowerCase)
  let wordArr = lowerCase.split(" ");
  console.log(wordArr)
  wordArr.forEach(word) {
    console.log(word);
  };
  return str;
}

titleCase("I'm a little tea pot");
