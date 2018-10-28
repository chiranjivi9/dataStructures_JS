// program to check for the 'sum' condition to be satisified

let arr = [1, 4, 5, 6, 8, 0, 12, 3, 2, 9];
let sum = 10;
let sorted = arr.sort(function(a,b){return(a-b)});
console.log(sorted);

function findSum(arr){
 let min = 0 ;
 let max = sorted.length - 1;
 // [ 0, 1, 2, 3, 4, 5, 6, 8, 9, 12 ]
 while(min < max){
   if(sorted[min] + sorted[max] === sum){
     console.log({
      Number1: sorted[min],
      Number2: sorted[max],
      Given_Sum: sum
     })
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
