// Write a JavaScript function to find the first not repeated character.

var str = 'aabcdscbc';

function findChar(str){
  for(var i = 0; i < str.length; i++){
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])){
      var char = str[i];
      break;
    }
  }
  return char;
}
console.log(str);
console.log({
  'The first not repeated character in the string is': findChar(str)
});


// var arr = {};
// function count(str){
//
//   for(var i = 0; i < str.length; i++){
//     var char = str.charAt(i)
//     if(arr[char]) {
//       arr[char]++;
//     } else {
//       arr[char] = 1;
//     }
//   }
//   return arr;
// }
//
// console.log(count(str));
