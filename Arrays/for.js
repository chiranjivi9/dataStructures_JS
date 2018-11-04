 // assign value to array
// var nums = [];
// for (var i=0; i<=10; i++){
//   nums += i;
// }
// // shallow copy
// var assignNums = nums; //you can assign the value of an array to another variable||This is simply assigning the memory location
// console.log(nums);
// console.log(assignNums);

//
// // sum of array elements
// var nums = [1, 2, 3, 4, 5];
// nums.splice(2,0,24, 25, 26, 27); //add elements to an array at a specific position Syntax: (indexNo,remElem, values)
// console.log({
//   original_array: nums
// });
// nums.reverse();
// console.log({
//   reversed_array: nums
// });
// var sum = nums[0] + nums[1] + nums[2] + nums[3] + nums[4];
// console.log({
//   array : nums,
//   result : sum
// });
// // sum of array elements using a for loop
// var nums = [1,2,3,5,8,13,21];
// nums.push(12, 13, 14); //pushing three new numbers in the array
// nums.splice(2,0,24, 25, 26, 27);  //add elements to an array at a specific position (indexNo,remElem, values)
// var sum = 0;
// for (var i=0; i<nums.length; i++){
//   sum += nums[i];
// }
// console.log({
//   Total:sum
// });
//
// var chars = ["D", "E", "Z", "X", "B", "A", "F", "G", "P", 23, 0, -23]; //sorts lexicographically
// console.log({
//   original_array: chars
// });
// chars.sort();
// console.log({
//   sorted_array : chars
// });
//
//
// // square of a number
// // forEach iterates over each number from the array
// function square(number){
//   console.log(number, number*number);
// }
// var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// number.forEach(square);
//
//
// // check even number with every()
//
// function isEven(number){
//   return number%2==0;
// }
// var number = [2,4,6,10,12];
// var even = number.every(isEven);
// if (even){
//   console.log({
//     array: number,
//     Message: "Even array"
//   });
// }else{
//   console.log({
//     array: number,
//     Message:"not even"
//   });
// }
// // Using some()
// // var mixedArr = [1,2,3,5,6,7,8];
// var mixedArr = [1,3,5,7,9]
// var someEven = mixedArr.some(isEven);
// if(someEven){
// console.log({
//   array:mixedArr,
//   Message:"some are even"
// });
// }else{
// console.log({
//   array:mixedArr,
//   Message:"All are odd"
// });
// }

// Using filter()
function isEven(number){
  return number%2==0;
}

function isOdd(number){
  return number%2!=0;
}

var number = [];
for(var i=0; i<20; i++){
  number[i] = i+1;
}
// var number= [11,12,13,14,15,16,17,18,17,18];

var even = number.filter(isEven);
var odd = number.filter(isOdd);

  console.log({
    message : "Even",
    array : even
  });


  console.log({
    message: "Odd",
    array: odd
  });




// var number = 0;
// var sum = 0;
// for(var number= 0; number<11; number++){
//   sum+= number;
//   console.log(sum);
// }
// console.log(sum);
//

// function Node(val){
//
//     this.value = val;
//     this.left = null;
//     this.right = null;
// }

// simple array
// var array = [10, 20, 30, 40, 39];
// console.log(array.length);

// array using constructors
//
// var array = new Array();
// console.log(array.length);
//
// var array = new Array(12, 2, 4, 5, 6, 23, "javascript", null, true);
// console.log(array[7]);

//array verfication  using Array.isArray()
// var number = 23;
// var arr = [12, 4, 6 , 13 , 2453];
// console.log(Array.isArray(number));
// console.log(Array.isArray(arr));
