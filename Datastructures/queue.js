function queue(element){
  //an array to store the queue element
  var collection = [];
  this.print = function(){
    console.log(collection);
  };
  // add an element
  this.enqueue = function(element){
    collection.push(element);
  };
  //remove an element
  this.dequeue = function(){
    return collection.shift();
  };
  //return the 0th indexed element i.e the front of the queue
  this.front = function(){
    return collection[0];
  };
  //return the length of the array
  this.size = function(){
    return collection.length;
  };
  // check for empty queue
  this.isEmpty = function(){
    return (collection.length === 0);
  };
}

var q = new queue();

q.enqueue(2);
q.print();
q.enqueue(3);
q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.print();
q.dequeue();
q.print();
console.log({
  Message: "the current front element of the queue is:",
  Details: q.front()
});

console.log("Priority Queue below.");
// Priority Queue

function pQueue(element){
  var arr = [];
  this.print = function(){
    console.log(arr);
  };
  this.enqueue = function(element){
    if(this.isEmpty()){
      arr.push(element);
    } else {
      var added = false;
      for(var i = 0 ; i< arr.length; i++){
        if(element[1]< arr[i][1]){
          arr.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if(!added){
        arr.push(element);
      }
    }
  };

  this.dequeue = function(){
    var value = arr.shift();
    return value[0];
  };
  this.front = function(){
    return arr[0];
  };
  this.size = function(){
    return arr.length;
  };
  this.isEmpty = function(){
    return (arr.length === 0);
  };
}

var pq = new pQueue();

pq.enqueue(["23",3]);
pq.enqueue(["A",1]);
pq.enqueue(["D",4]);
pq.enqueue(["10",2]);
pq.enqueue(["XYZ",5]);
pq.print();
