// Check whether two strings are anagrams of each other

var word1 = 'xyz';
var word2 = 'yzx';
//function to check anagrams
function anagrams(word1, word2){
  // primitive way of sorting the inputs seperately
  // var sortedWord1 = word1.split('').sort().join();
  // var sortedWord2 = word2.split('').sort().join();
  // OR
  // passing the input through function sortStr and then splitting,
  // sorting and rejoining them again
  var sortedWord1 = sortStr(word1);
  var sortedWord2 = sortStr(word2);
  console.log(sortedWord1);
  console.log(sortedWord2);
  //check whether the words match each other or not
  if(sortedWord1 === sortedWord2){
    console.log("Words are anagrams");
  } else {
    console.log("Words are not anagrams");
  }
  return 0;
}

function sortStr(str){
  // .split() breaks the word into single varter
  // .sort() sorts the split sequence into alphabetical order
  // .join() joins the sorted characters
  return str.split('').sort().join();
}

console.log(anagrams(word1, word2));
