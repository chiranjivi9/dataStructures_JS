var element = [95,45,86,33,71,99,8,24,32,89,37,7,77,18,63,94,76,19,52,35,20,22,64,58,85,86,34,34,38,88,2,13,55,34,31,67,88,78,49,94,84,50,13,84,45,16,61,
  87,29,37,69,47,74,78,8,62,36,61,67,55,94,99,84,63,34,25,85,62,72,32,89,61,14,58,53,85,19,44,87,11,15,42,62,83,40,95,56,96,76,47,8,35,12,44,18,55,
  12,37,32,60]

function quickSort(element){
  if(element.length < 1){
    return [];
  }

  // arr = [2,1,3,5,7,4]
  var left = [];
  var right = [];
  var pivot = element[0];
  for(var i = 1; i < element.length; i++){
    if(element[i] < pivot){
      left.push(element[i]);
    } else {
      right.push(element[i]);
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right));
}

// console.log(element);
console.log(quickSort(element))
