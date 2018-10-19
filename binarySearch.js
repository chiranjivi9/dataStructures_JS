let arr = [10,2,3,41,1,4,6,8,9];

function binSearch(arr, elem){
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;
  while(low <= high){
    mid = Math.floor((high + low)/2);
    if (arr[mid] === elem) {
      return (arr[mid] + " " + "is in the array at index");
    } else if (elem > mid){
      low = mid + 1;
    } else if ( elem < mid ){
      high = mid - 1;
    }
  }
    return ( elem + " " + "does not exists in the array " );
}

console.log({Given_array: arr})
let sorted = arr.sort(function(a,b){ return (a-b) });
console.log({Sorted_array: sorted});
console.log(binSearch(sorted, 10));
