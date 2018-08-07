class Node{
  constructor(value, left=null, right=null){
    this.value = value;
    this.right = left;
    this.left = right;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }
  
  toObject(){
    return this.root;
  }
  
  // Recursion
  add(value, node=this.root){
    if(!this.root){
      this.root = new Node(value);
    }else{
      if(value === node.value){
        return;
      }else if(value < node.value){
        let left = node.left;
        if(left){
          this.add(value, left);
        }else{
          node.left = new Node(value);
        }
      }else{
        let right = node.right;
        if(right){
          this.add(value, right);
        }else{
          node.right = new Node(value);
        }
      }
    }  
  }
  
  // Iteration
  addIteration(value){
    if(!this.root){
      this.root = new Node(value);
    }else{
      let current = this.root;
      while(current){
        if(value === current.value){
          break;
        }else if(value < current.value){
          let left = current.left;
          if(left){
            current = left;
          }else{
            current.left = new Node(value);
          }
        }else{
          let right = current.right;
          if(right){
            current = right;
          }else{
            current.right = new Node(value);
          }
        }
      }
    }
  }
}

const nums = [3,7,4,6,5,1,10,2,9,8];
const tree = new Tree();
nums.map( num => tree.add(num));
const objs = tree.toObject();
