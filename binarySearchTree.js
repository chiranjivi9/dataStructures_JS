// Binary search tree

// create two classes
// Node and BST
class Node{
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BST{
  //the constructor creates the root node
  constructor(){
    this.root = null;
  }

  //create an add() to add data to the tree
  add(data){
    //creating ref to the root node
    const node = this.root;
    //if its the first node then set the first node to null and then add the data
    if(node === null){
      // empty tree
      this.root = new Node(data);
      return
    } else {
    // if the root node !== null then check for the next node
    //creating a recursive function
      const searchTree = function(node){
        if(data < node.data){
          //if the data passed is < than the root node
          if(node.left === null){
            node.left = new Node(data);
            return;
          } else if (node.left!== null){
             return searchTree(node.left);
          }
        } else if (data > node.data){
          // if the data passed is > than the root node
          if(node.right === null){
            node.right = new Node(data)
            return;
          } else if (node.right!==null){
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }
  // find the min value in the tree ie left most node
  findMin(){
    let current = this.root;
    while(current.left !== null){
      current = current.left
    }
    return current.data;
  }
//find the max value in the tree i.e the right most node
  findMax(){
    let current = this.root;
    while(current.right !== null){
      current = current.right;
    }
    return current.data
  }

  //
  isPresent(data){
    let current = this.root;
    while(current){
      if(data === current.data){
        return true;
      }
      if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

const bst = new BST();

bst.add(3);
bst.add(4);
bst.add(12);
bst.add(14);
bst.add(5);
bst.add(10);
bst.add(41);
bst.add(2);
console.log(bst.findMax());
console.log(bst.findMin());
console.log(bst.isPresent(111));
console.log(bst.isPresent(12));
