function isSymbolPresentInString(str, symbol){
    for(var i = 0; i < str.length; i++){
      if(str[i] === symbol) {
        return true;
      }
    }
      return false;
      
    }
  
  function getSymbolIndex(str, symbol){
    for(let i = 0; i < str.length; i++){
      if(str.charAt(i) === symbol){
        return i;
      }
    }
      return -1;
  }
  
  
  console.log(isSymbolPresentInString("abcdefghjkl", "a"));
  console.log(isSymbolPresentInString("qwertyuiasdg", "x"));
  console.log(getSymbolIndex("123456790", "7"));
  console.log(getSymbolIndex("jkgrxsewq", "o"));