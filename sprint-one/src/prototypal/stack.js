var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);

  someInstance.storage = {};

  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(string) {
  // Add key (size) = string
  this.storage[this.size()] = string;
};

stackMethods.pop = function() {
  // Store key (size - 1)
  var popped = this.storage[this.size() - 1];
  // Rm key
  delete this.storage[this.size() - 1];
  // Return key
  return popped;
};

stackMethods.size = function() {
  var count = 0;
  // For each key in storage, add to count
  for (var key in this.storage) {
    count++;
  }
  return count;
};