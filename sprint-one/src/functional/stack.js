var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Create key (storage size) = value
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    // Rm key (storage size - 1) from storage.
    var popped = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return popped;
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
