let arr = [10,2,3,41,1,4,6,8,9];

function binSearch(arr, elem){
  // we need the
  // high and low to check whether the array is sorted or not
  // mid to divide the array and iterate.
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;
  while(low <= high){
    // calculate mid of the array with inbuilt javascript function.
    mid = Math.floor((high + low)/2);
    if (arr[mid] === elem) {
      //if elem at mid then return true
      return (arr[mid] + " " + "is in the array at index");
    } else if (elem > mid){
      // if elem > mid then set the low to the next elem after the mid ie mid+1
      // arr = [low = 10, 2, 3, 41, mid = 1, 4 ,6, 8, high = 9]
      // new low = 4
      low = mid + 1;
    } else if ( elem < mid ){
      // if elem<mid then change the high to the one elem to the left of mid
      // ie mid-1
      // arr = [low = 10, 2, 3, 41, mid = 1, 4 ,6, 8, high = 9]
      // new high = 41 
      high = mid - 1;
    }
  }
    return ( elem + " " + "does not exists in the array " );
}
c
console.log({Given_array: arr})
let sorted = arr.sort(function(a,b){ return (a-b) });
console.log({Sorted_array: sorted});
console.log(binSearch(sorted, 10));
