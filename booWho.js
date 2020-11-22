function booWho(bool) {
    let convertBool = typeof(bool);
    if (convertBool == "boolean"){
      return true;
    } else {
      return false;
    }
  }
  
  console.log(booWho(null));
  