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
}

stackMethods.pop = function() {
  // Store key (size - 1)
  // Rm key
  // Return key
}

stackMethods.size = function() {
  // For each key in storage, add to count
}