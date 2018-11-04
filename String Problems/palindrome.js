// stack
//required functions: PUSH, POP, PEEK, LENGTH
// checking a strig palindrome
// defining an array as a stack
var stackArr = [];
var word = "racecar";
var revWord = "";

//pushing the word into the stack stackArr
for( var i=0; i < word.length; i++){
  stackArr.push(word[i]);
}
console.log(stackArr);

//pop the elements of the stakc in stroe into the empty var revWord
for(var j = 0; j < word.length; j++){
  revWord += stackArr.pop();
}
console.log({
 user_input : word
});
console.log({
  reverse_string : revWord
});

if (word === revWord){
  console.log("palindrome");
}else{
  console.log("not a palindrome");
}
