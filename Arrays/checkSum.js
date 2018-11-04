// program to check for the 'sum' condition to be satisified

var arr = [1, 4, 5, 6, 8, 0, 12, 3, 2, 9];
var sum = 10;
var sorted = arr.sort(function(a,b){return(a-b);});
console.log(sorted);

function findSum(arr){
 var min = 0 ;
 var max = sorted.length - 1;
 // [ 0, 1, 2, 3, 4, 5, 6, 8, 9, 12 ]
 while(min < max){
   if(sorted[min] + sorted[max] === sum){
     console.log({
      Number1: sorted[min],
      Number2: sorted[max],
      Given_Sum: sum
    });
     return "The pair with sum "+ sum +" exist.";
   } else if(sorted[min] + sorted[max] < sum){
     min++;
   } else {
     max --;
   }
 }
 return "The pair with sum "+ sum +" does not exist.";
}

console.log(findSum(sorted, sum));
