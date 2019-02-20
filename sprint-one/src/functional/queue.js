var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var lgestNum = 0;
    // look for largest num key
    for (var key in storage) {
      if (key > lgestNum) {
        lgestNum = key;
      }
    }
    // create key (num + 1) = value
    storage[lgestNum + 1] = value;
  };

  someInstance.dequeue = function() {
    // look for smallest num key
    // rm key
  };

  someInstance.size = function() {
    var count = 0;
    // For each key in storage add to count
    for (var key in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};
