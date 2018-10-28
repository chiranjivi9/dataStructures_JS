var arr = [3, 2, 6, 4, 5, 100, -1, -12, 1, 23, 12, 7, 9]
// var arr = [100, 99, 98, 97, 96, 4, 3, 2, 1, 0, -100]
function insertionSort(arr){
  // Outer for loop iterates through the array from index 1
  for(let i = 1; i < arr.length; i++ ){
    for(let j = 0; j < i; j++){
      if(arr[i] < arr[j]){
        //the splice function is used as it allows
        // to enter/insert an element at a specific index.
        //Syntax arrName.splice(index#, removeElem, valueToBeAdded)
        var temp = arr.splice(i,1);
        arr.splice(j, 0, temp[0])
      }
    }
  }
  return arr;
}

console.log(insertionSort(arr));
