// Find the unique value in an array and return the counter
// Using double pointer for this method

var testArr = [1,1,3,3,4,5,5,5,6,10,10,12,14,14,14,15,15,18]

function findUniqueVal(array){
  var i = 0;
  for(var j = 1; j < array.length; j++) {
    if(array[i] !== array[j]) {
      i++
      array[i] = array[j]
    }
    console.log( i, j)
  }
  console.log(i+1)
  return i + 1;
}

findUniqueVal(testArr)
