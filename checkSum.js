// program to check for the sum condition to be satisified

let arr = [1, 4, 5, 6, 8, 0, 12, 3, 2, 9];
let sum = 7;
let sorted = arr.sort(function(a,b){return(a-b)});
console.log(sorted);

function findSum(arr){
 let min = 0 ;
 let max = sorted.length - 1;
 while(min < max){
   if(sorted[min]+ sorted[max] === sum){
     return 1;
   } else if(sorted[min] + sorted[max] < sum){
     min++;
   } else {
     max --;
   }
 }
 return -1;
}

console.log(findSum(sorted, sum));
