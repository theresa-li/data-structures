var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  var storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
  // Find key with largest number
  // Add key (largest number + 1) with value string
}

queueMethods.dequeue = function() {
  // Find key with smallest number
  // Store key (smallest number)
  // Remove key
  // Return key
}

queueMethods.size = function() {
  // For each key in storage, add to count
}
