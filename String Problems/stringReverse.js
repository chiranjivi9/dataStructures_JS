// reverse String in Java using Iteration and Recursion

var word = "abcdef";
// creating an empty stack array
var stack = [];
var popWord = "";
// pushing the elements of word in the stack
for(var i = 0; i < word.length; i++){
  stack.push(word[i]);
}
// poping out of the stack and storing in popWord
for(var j = 0; j < word.length; j++){
  popWord += stack.pop();
}
console.log({
  word1 : word,
  ReversedString : popWord
});

// check palindrome
if(word === popWord){
  console.log('The string is a palindrome.');
} else {
  console.log('The string is not a palindrome.');
}
