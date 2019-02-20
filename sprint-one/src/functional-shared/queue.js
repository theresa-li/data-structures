var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  
  _.extend(newQueue, queueMethods);
  
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  var lgest;
  // Find largest num in obj
  for (var key in this) {
    if (lgest < key) {
      lgest = key;
    }
  }
  // Add key (largest num + 1) = value
  this[lgest + 1] = value;
};

queueMethods.dequeue = function() {
  var smest;
  // Find smallest num in object
  for (var key in this) {
    if (smest === undefined || smest > key) {
      smest = key;
    }
  }
  // Save instance of key (smallest num) val
  var dequeued = this[smest];
  // Remove key
  delete this[smest];
  // Return instance
  return dequeued;
};

queueMethods.size = function() {
  // Add to count for each key in obj
  var count = 0;
  for (var key in this) {
    count++;
  }
  return count;
};