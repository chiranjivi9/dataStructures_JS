var arr = [ 2, 4, 5, 6, 7, 10, 1, -2, 100, 0];
console.log({Original_Array: arr});
// sorting the array in ascending order
var sorted = arr.sort(function(a,b){return(a-b);});
function findMin(arr){
  var low = arr[0];
  //itereating through the array
  for(var i = 1; i < arr.length; ++i){
    // if any lower value found in the array than the first index then replace it
    if(arr[i] < low){
      low = arr[i];
    }
  }
  return low;
}

console.log({Sorted_Array: sorted});
// javascript inbuilt function to find min & max
console.log({Max_Value: Math.max(...sorted)});
console.log({Min_Value: findMin(arr)});
