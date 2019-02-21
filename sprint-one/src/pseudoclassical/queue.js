var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(string) {
  // Find largest key number
  // Add key (largest number + 1) with value (string)
}

Queue.prototype.dequeue = function() {
  // Find smallest number
  // Store key (smallest number)
  // Remove key
  // Return key
}

Queue.prototype.size = function() {
  // For each key in storage, add count
}