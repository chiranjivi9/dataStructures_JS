// find the number of vowels in the string
// creating an empty arr
// let charArr = {};
//declaring two stacks for vowels and the consonants
let vowelArr = [];
let consonantArr = [];
let vowels = ['a', 'e', 'i' , 'o', 'u'];
let str = '12becadsefiii';
var findVowel = function(str){
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < vowels.length; j++){
      if(str[i] === vowels[j]){
        vowelArr.push(str[i]);
      }
    }
  }
    return 1;
}

console.log(findVowel(str));
console.log(vowelArr);
// console.log(consonantArr);
