// replace char with another char
var str = "a sfhs dgdn sf dsf";

function replace(str){
  // set an accumulator
  var arr = [];
  for (var i = 0; i < str.length; i++){
    //get the current character char at index i
    var char = str.charAt(i);
    // if the char === " " (empty space) then replace
    // it with '%'
    if(char === " "){
       arr += "%";
    // else leave as it is
    } else {
      arr += char;
    }
  }
  return arr;
}

console.log(replace(str));
