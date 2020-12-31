function titleCase(str) {
  // let word = str.substring(0, 2) + str[2].toUpperCase() + str.substring(3);
  // console.log(word)
  let lowercase = str.toLowerCase();
  let words = lowercase.split(' ');
  for (let i = 0; i < words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].substring(1);
  }
  let sentence = words.join(' ');
  console.log(sentence);
  return sentence;
}

titleCase("sHoRt AnD sToUt");
