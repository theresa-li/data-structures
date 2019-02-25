var BinarySearchTree = function(value) { //node
  this.value = value;
  this.left = null;
  this.right = null;
  return this;
};

BinarySearchTree.prototype.insert = function(value) {
  if (value < this.value ) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(val) {
 if (this.value === val) return true;
  if (val < this.value) {
    if (!!this.left) {
      return this.left.contains(val);
    }
  } else if (val > this.value) {
    if (!!this.right) {
      return this.right.contains(val);
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(cb) {
 cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb)
  }
  if (this.right) {
    this.right.depthFirstLog(cb)
  };

}



/*
 * Complexity: What is the time complexity of the above functions? log(n)
 */

