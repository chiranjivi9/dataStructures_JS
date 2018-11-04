// Print duplicate characters from String with count


// This is an interesting problem.
// What we can do is turn the string to lower case using String.toLowerCase,
// and then split on "", so we get an array of characters.
//
// We will then sort it with Array.sort. After it has been sorted,
// we will join it using Array.join. We can then make use of
// the regex /(.)\1+/g which essentially means match a varter and subsequent
// varters if it's the same.
//
// When we use String.match with the stated regex, we will get an Array,
//  whose length is the answer. Also used some try...catch to return 0 in case
//  match returns null and results in TypeError.


// Method #1
function howManyRepeated(str){
   try{ return str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
   catch(e){ return 0; } // if TypeError
}
console.log(howManyRepeated("Indivisibilities")); // 2



//Method #2
var str = "Indivisibilities";
var frequency = {};

function findFrequency(str){
  var arr = str.toLowerCase();
  for (var i in arr){
    var char = arr.charAt(i);
    if(frequency[char]){
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }
  return frequency;
}

console.log(findFrequency(str));
