var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (!this.tail) {
      this.tail = newNode;
      this.head = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
  };

  list.removeHead = function() {
    var temp = this.head;
    this.head = this.head.next;
    return temp.value
  };

  list.contains = function(target) {
    while (this.head.next) {
      if (this.head.value === target) return true;
      this.head = this.head.next;
    }
    if (this.tail.value === target) {return true};
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var myNode = new Node (1);
// var secondNode = new Node (2);
// debug()
