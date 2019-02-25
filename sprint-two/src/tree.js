var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var node = Tree(value)
  this.children.push(node);
  return node
};

treeMethods.contains = function(target) {
  var queue = [];
  queue.push(this);
  var node;
  while (queue.length !== 0) {
    node = queue.shift();
    if (node.value === target) return true;
    node.children.forEach(child => queue.push(child));
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions? O(n)
 */
