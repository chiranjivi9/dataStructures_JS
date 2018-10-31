// Write a JavaScript function to find the first not repeated character.

let str = 'aabcdscbc';

function findChar(str){
  for(var i = 0; i < str.length; i++){
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      var char = str[i];
      break;
    }
  }
  return char;
}
console.log(str)
console.log(findChar(str))
