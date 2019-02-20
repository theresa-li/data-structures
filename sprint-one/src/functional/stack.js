var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // Check for key w/ largest number
    // Create key (one more than largest number) = value
  };

  someInstance.pop = function() {
    // Check for key w/ largest num
    // Rm key from storage.
  };

  someInstance.size = function() {
    // For each key in storage add to count
  };

  return someInstance;
};
