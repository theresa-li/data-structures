var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(string) {
  var lgestNum = 0;
  // Find key with largest number
  for (var key in this.storage) {
    if (key > lgestNum) {
      lgestNum = key;
    }
  }
  // Add key (largest number + 1) with value string
  this.storage[lgestNum + 1] = string;
}

queueMethods.dequeue = function() {
  var smestNum;
  // Find key with smallest number
  for (var key in this.storage) {
    if (smestNum === undefined || smestNum > key) {
      smestNum = key;
    }
  }
  // Store key (smallest number)
  var dequeued = this.storage[smestNum];
  // Remove key
  delete this.storage[smestNum];
  // Return key
  return dequeued;
}

queueMethods.size = function() {
  var count = 0;
  // For each key in storage, add to count
  for (var key in this.storage) {
    count++;
  }
  return count;
}
