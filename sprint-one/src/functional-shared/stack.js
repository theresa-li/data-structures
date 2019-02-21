var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {}; // this
  _.extend(someInstance, stackMethods);
  
  someInstance.storage = {};
  
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(string) {
  // add key (size) = string
  this.storage[this.size()] = string;
};

stackMethods.pop = function() {
  // store val of key (size - 1)
  // rm val
  // return val
};

stackMethods.size = function() {
  var count = 0;
  // for each key, add to count
  for (var key in this.storage) {
    count++;
  }
  return count;
};

// Implement a stack with the following methods:

// push(string) - Add a string to the top of the stack
// pop() - Remove and return the string on the top of the stack
// size() - Return the number of items on the stack