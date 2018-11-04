var unsortedArr = [10, 23, 1, 2, 3, 11, 9, 4, 2, 3, -2, 1, 0, 133,  100];
var swapped;

function bubbleSort(arr){
  swapped = false;
  var end = arr.length-1;
  for(var i = 0, j = 1; i< end; i++, j++){
    if(arr[i] > arr[j]){
      swapped = true;
      [arr[i], arr[j]] = [arr[j], arr[i]];
// OR
      // var temp = arr[i];
      // arr[i] = arr[i+1];
      // arr[i+1] = temp;
    }
  }
  end--;
}
do{
  bubbleSort(unsortedArr);
} while (swapped);

console.log(unsortedArr);
