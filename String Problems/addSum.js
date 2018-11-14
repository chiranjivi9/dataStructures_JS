// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
// Input: 38
// Output: 2
// Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2.
//              Since 2 has only one digit, return it.

var num = ['1', '10'];
var splitNum = num.toString(10).split('');
console.log(splitNum);
var sum = 0;

for(var i = 0; i < num.length; i++){
  sum += num[i];
}
console.log(num);

// TODO: add the numbers




// for(var i = 0, n = splitNum.length; i < n; i++) {
//   var n =+ splitNum[i];
// }
// console.log(splitNum);

// for(var j=0; j<splitNum.length; j++){
//
// }
//
// console.log(sum);
