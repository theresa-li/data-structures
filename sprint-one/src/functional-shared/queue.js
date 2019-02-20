var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  
  _.extend(newQueue, queueMethods);
  
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // Find largest num in obj
  // Add key (largest num + 1) = value
};

queueMethods.dequeue = function() {
  // Find smallest num in object
  // Save instance of key (smallest num) val
  // Remove key
  // Return instance
};

queueMethods.size = function() {
  // Add to count for each key in obj
};