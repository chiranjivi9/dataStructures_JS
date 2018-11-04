// find the number of vowels in the string
// creating an empty arr
// var charArr = {};
//declaring two stacks for vowels and the consonants
var vowelArr = [];
var consonantArr = [];
var vowels = ['a', 'e', 'i' , 'o', 'u'];
var str = 'This is a string';
var findVowel = function(str){
  for(var i = 0; i < str.length; i++){
    for(var j = 0; j < vowels.length; j++){
      if(str[i] === vowels[j]){
        vowelArr.push(str[i]);
      }
    }
  }
  return 1;
};

console.log(findVowel(str));
console.log({
  Input: str
});
console.log({
  'The number of vowels are': vowelArr.length
});
console.log(vowelArr);
// console.log(consonantArr);
