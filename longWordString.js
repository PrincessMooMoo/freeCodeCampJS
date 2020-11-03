//console.log("hello");
//let arr = str.split(" ");

function findLongestWordLength(str) {
    let length = [];
    length = str.split(" ");
    for(str of findLongestWordLength){
        let newLength = [];
        if(length[i].length > length[i+1].length){
            newLength = length[i].length;
        } else newLength = length[i+1].length;
    }
    return str.length;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  