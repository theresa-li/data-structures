var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(string) {
  // Add key (storage size) with value (string)
  this.storage[this.size()] = string;
};

Stack.prototype.pop = function() {
  // Store key (storage size - 1) value
  var popped = this.storage[this.size() - 1];
  // Delete key
  delete this.storage[this.size() - 1];
  // Return stored key
  return popped;
};

Stack.prototype.size = function() {
  var count = 0;
  // For each key in storage, add to count
  for (var key in this.storage) {
    count++;
  }
  return count;
};