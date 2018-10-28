// create a stack
var stack = function() {
  this.count = 0;
  this.storage = {};
  // add element into the the stack [push()]
  this.push = function(value){
    this.storage[this.count] = value; //pushing the value at count = 0 i.e index 0
    this.count++;
  }
  // Remove and return the value at the end of the stack [pop()]
  this.pop = function(){
    if(this.count === 0){
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  //size of the stack
  this.size = function(){
    return this.count;
  }
  // Return the top element of the stack [peek()]
  this.peek = function(){
    //the top of the stack
    return this.storage[this.count-1];
    //count-1 because this will give us the latest entered element
    //i.e top position of the stack
  }
}

var myStack = new stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
console.log(myStack);
myStack.pop();
console.log(myStack);
console.log({
  Message : "The top element of the stack",
  Details: myStack.peek()
});
console.log(myStack);
myStack.pop();
console.log(myStack);
console.log({
  Message : "The top element of the stack",
  Details: myStack.peek()
});
console.log(myStack);
