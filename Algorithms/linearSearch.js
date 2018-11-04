var arr = [2, 1, 5, 10, 3, 5, 24, -1, 14];
// var arr = [10];
function linSearch(arr, value){
  if(arr.length <= 1){      // check if the array has more than one elements
    return "Array too short with one or less element.";
  } else {
    //iterate through the array and compare the value with each element.
    for(var i = 0; i < arr.length; ++i){
      if(arr[i] === value){
        return (value + " " + "is in the array");
      }
    }
  }
  return "Value not in array";
}

console.log(linSearch(arr, 10));
