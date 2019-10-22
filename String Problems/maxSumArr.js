// function returns the maximum sum in an array based on the number of digits passed to it.
// eg: maxSumArr([1,3,21,42,13,2,9], 4) -> should return the max sum of four digits in the array.
function maxSubArrSum(array, num) {
  if(num > array.length) return null;

  var max = -Infinity;
  for(let i = 0; i < (array.length - num + 1); i++ ) {
    let temp = 0;
    for(let j = 0; j < num; j++) {
      temp += array[i + j]
    }
    if(temp > max) {
      max = temp;
    }
  }
  console.log(max);
  return max
}

// maxSubArrSum([1,2,6,3,5,7,3,3,2,9,2], 2);



function maxSum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if(arr.length < num) return null;
  for(let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(maxSum);
  // return maxSum;
}

maxSum([2,3,1,4,5,1,9,6,7,4,3,5], 3)
