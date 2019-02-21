class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(string) {
    // Add key (storage size) with value (string)
    this.storage[this.size()] = string;
  }

  pop() {
    // Store key (storage size - 1)
    var popped = this.storage[this.size() - 1];
    // Delete key
    delete this.storage[this.size() - 1];
    // Return key
    return popped;
  }

  size() {
    var count = 0;
    // For each key in storage, add count
    for (var key in this.storage) {
      count++;
    }
    return count;
  }
}