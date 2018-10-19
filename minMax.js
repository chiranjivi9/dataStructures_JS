let arr = [ 2, 4, 5, 6, 7, 10, 1, -2, 100, 0];
// sorting the array in ascending order
let sorted = arr.sort(function(a,b){return(a-b)});
function findMin(arr){
  let low = arr[0];
  //itereating through the array
  for(var i = 1; i < arr.length; ++i){
    // if any lower value found in the array than the first index then replace it
    if(arr[i] < low){
      low = arr[i];
    }
  }
  return low
}
// javascript inbuilt function to find min & max
console.log(Math.max(...sorted))
console.log(sorted)
console.log(findMin(arr))
