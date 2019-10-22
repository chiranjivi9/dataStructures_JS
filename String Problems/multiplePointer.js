// [-4, -3, -2, -1, 0, 1, 3, 4, 6]
// sum_zero
// function return a pair which sums to zero.


function sumZero(array){
  let leftPtr = 0;
  let rightPtr = array.length - 1;

  // check for a sorted array
  while(leftPtr < rightPtr){
    let sum = array[leftPtr] + array[rightPtr]
    if(sum === 0) {
      console.log(array[leftPtr], array[rightPtr])
      return [array[leftPtr], array[rightPtr]];
    } else if(sum > 0) {
      rightPtr--;
    } else {
      leftPtr ++;
    }
  }
  console.log('Array [' + array + '] has no pair which sums to zero.')
  return false
}


sumZero([-9, -3, -2, -1, 0, 1, 3, 4, 6])

sumZero([-9, -5, -2, 0, 1, 3, 4, 6])
