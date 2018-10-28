var stack = function(value){
  this.count = 0;
  this.storage = {};
// PUSH POP PEEK
  this.push = function(value){
    this.storage[this.count] = value;
    this.count++;
  }

  this.pop = function(){
    if( this.count === 0){
      return undefined
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = function(){
    return this.count
  }

  this.peek = function(){
    return this.storage[this.count-1];
  }
}

var stc = new stack();

stc.push(2);
stc.push(3);
stc.push(4);
console.log(stc);
stc.pop();
console.log(stc.peek());
stc.push(5);
console.log(stc);
